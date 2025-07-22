import SplitText from "@/components/SplitText.tsx";
import RotatingText from "@/components/RotatingText.tsx";
import Particles from "@/components/Particles.tsx";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

function Home() {
  const connectOnClick = () => {
    const linkedinUrl = "https://www.linkedin.com/in/funghokyeung/";
    const newWindow = window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null; // Prevents the new page from accessing the opener
    } else {
      console.error(
        "Failed to open new window. Please allow pop-ups for this site.",
      );
    }
  };

    const githubOnClick = () => {
      const githubUrl = "https://github.com/jake-fung";
      const newWindow = window.open(githubUrl, "_blank", "noopener,noreferrer");
      if (newWindow) {
        newWindow.opener = null; // Prevents the new page from accessing the opener
      } else {
        console.error(
            "Failed to open new window. Please allow pop-ups for this site.",
        );
      }
    }

  const resumeOnClick = () => {
    const resumeUrl = "https://drive.google.com/file/d/1kjTseNDU-sHKJhHGmgYU86pGnAAe6BSg/view?usp=sharing";
    const newWindow = window.open(resumeUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null; // Prevents the new page from accessing the opener
    } else {
      console.error(
        "Failed to open new window. Please allow pop-ups for this site.",
      );
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden bg-black/90">
        <div className="fixed top-0 left-0 h-full w-full overflow-hidden">
          <Particles
            particleColors={["#000000", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <div className="flex h-screen w-screen flex-row items-center justify-between px-40">
          <div className="flex flex-col items-start">
            <SplitText
              text="I am Jake Fung,"
              className="pb-2 text-center text-7xl font-black"
              delay={20}
              duration={2.5}
              ease="elastic.out(1, 0.3)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <RotatingText
              texts={["a UI developer.", "a UBC student.", "a Hongkonger."]}
              mainClassName="text-7xl font-black text-center pb-2 animate-fade-in-scale"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <div className="z-10 flex flex-row items-center justify-center gap-4 pt-4">
              <button
                className={
                  "animate-fade-in-up-delay bg-linkedin hover:bg-linkedin-hover transition-all duration-200 ease-in-out hover:-translate-y-0.5"
                }
                onClick={connectOnClick}
              >
                <LinkedInLogoIcon className={"my-1 mr-2 scale-150"} />
                Connect
              </button>
              <button
                  className={
                    "animate-fade-in-up-delay bg-github hover:bg-github-hover transition-all duration-200 ease-in-out hover:-translate-y-0.5"
                  }
                  onClick={githubOnClick}
              >
                <GitHubLogoIcon className={"my-1 mr-2 scale-150"} />
                GitHub
              </button>
              <button
                  className={
                    "animate-fade-in-up-delay bg-gray-800 hover:bg-gray-900 transition-all duration-200 ease-in-out hover:-translate-y-0.5"
                  }
                  onClick={resumeOnClick}
              >
                  Resumé
              </button>
            </div>
          </div>
          <img
            src="/src/assets/avatar.jpg"
            className={"border-2 p-1 border-white animate-fade-in-scale z-10 h-96 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-white/30"}
            alt={"avatar"}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
