import {useEffect, useRef, useState} from "react";

interface Project {
    _id: string;
    project_name: string;
    description?: string;
    technologies?: string[];
    status?: string;
}

const MainMenu= () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch data from database
    const fetchProjects = async () => {
        setLoading(true);
        setError(null);

        try {
            const url = 'http://localhost:3001/api/projects';

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setProjects(data);
            return data;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch projects';
            setError(errorMessage);
            console.error('Error fetching projects:', err);
            return [];
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.playbackRate = 3;
        videoRef.current.autoplay = true;
        videoRef.current.loop = true;
        videoRef.current.muted = true;
    }, [videoRef])

    return (
        <main className="flex w-screen z-10 bg-black/90 transition-all duration-300 ease-in-out dark:bg-white/90">
            <div className="flex flex-row w-screen items-center justify-between gap-4 mx-20">
                <div className="flex flex-col">
                    <h1 className="font-black">OOTDscribe</h1>
                    <p>📸 Snap. Express. Diary. Your AI-powered journal starts here!</p>

                    {/* Database fetch controls */}
                    <div className="mt-4 space-y-2 z-10">
                        <button
                            onClick={() => fetchProjects()}
                            disabled={loading}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                            {loading ? 'Loading...' : 'Fetch All Projects'}
                        </button>

                        {error && (
                            <div className="text-red-500 text-sm">
                                Error: {error}
                            </div>
                        )}

                        {projects.length > 0 && (
                            <div className="text-green-500 text-sm">
                                Found {projects.length} project(s)
                            </div>
                        )}
                    </div>
                </div>
                <video ref={videoRef} className="animate-fade-in-scale h-3/5 z-10 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <source
                        // src="/src/assets/loop.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </main>
    )
}

export default MainMenu;