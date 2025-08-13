import { useEffect, useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  _id: string;
  project_name: string;
  description?: string;
  video_link?: string;
  code_link?: string;
  demo_link?: string;
  devpost_link?: string;
}

const MainMenu = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  // Function to open a URL in a new tab with security features
  const openInNewTab = (url: string | undefined) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    } else {
      console.error(
        "Failed to open new window. Please allow pop-ups for this site.",
      );
    }
  };

  // Function to fetch data from database
  const fetchProjects = async (): Promise<Project[]> => {
    setLoading(true);

    try {
      const url = "http://localhost:3001/api/projects";

      const response = await fetch(url);

      const data = await response.json();
      setProjects(data);
      return data as Project[];
    } catch (err) {
      console.error("Error fetching projects.", err);
      return [] as Project[];
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects when the component mounts
  useEffect(() => {
    void fetchProjects();
  }, []);

  // Reveal on scroll: animate each project container when it enters the screen
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal"),
    );
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-scale");
            entry.target.classList.remove("opacity-0");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        // set the threshold and rootMargin to control when the animation triggers
        threshold: 0.1,
        rootMargin: "-100px",
      },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <main className="flex w-screen flex-col bg-black/90 transition-all duration-300 ease-in-out dark:bg-white/90">
      {loading ? (
        <div className="flex w-screen items-center justify-center">
          <div className="text-2xl font-bold text-white">
            Loading Projects...
          </div>
        </div>
      ) : projects.length > 0 ? (
        projects.map((project: Project) => (
          <div
            key={project._id}
            className="scroll-reveal flex w-screen flex-row items-center justify-between p-20 opacity-0"
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{project.project_name}</h1>
              <p>{project.description}</p>
              <div className="relative z-10 flex flex-row items-center gap-4 pt-2">
                {project.code_link ? (
                  <button
                    className="animate-fade-in-up-delay bg-github hover:bg-github-hover text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
                    onClick={() => openInNewTab(project.code_link)}
                  >
                    <GitHubLogoIcon className="my-1 mr-2 scale-150" />
                    Code
                  </button>
                ) : null}
                {project.demo_link ? (
                  <button
                    className="animate-fade-in-up-delay bg-github hover:bg-github-hover text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
                    onClick={() => openInNewTab(project.demo_link)}
                  >
                    <GitHubLogoIcon className="my-1 mr-2 scale-150" />
                    Demo
                  </button>
                ) : null}
                {project.devpost_link ? (
                  <button
                    className="animate-fade-in-up-delay bg-github hover:bg-github-hover text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
                    onClick={() => openInNewTab(project.devpost_link)}
                  >
                    <GitHubLogoIcon className="my-1 mr-2 scale-150" />
                    Devpost
                  </button>
                ) : null}
              </div>
            </div>
            <div className="relative z-20">
              <video
                className={
                  "h-96 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-white/40"
                }
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 2;
                }}
              >
                <source src={project.video_link} type="video/mp4" />
              </video>
            </div>
          </div>
        ))
      ) : (
        <div className="flex w-screen items-center justify-center">
          <div className="text-2xl font-bold text-white">No Projects Found</div>
        </div>
      )}
    </main>
  );
};

export default MainMenu;