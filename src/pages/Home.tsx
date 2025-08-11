import SplitText from "../components/ui/SplitText.tsx";
import RotatingText from "../components/ui/RotatingText.tsx";
import Particles from "../components/ui/Particles.tsx";
import Magnet from "../components/ui/Magnet.tsx";
import Switch from "../components/ui/Switch.tsx";
import MainMenu from "../components/MainMenu.tsx";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  FileIcon,
} from "@radix-ui/react-icons";

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null;
  } else {
    console.error(
      "Failed to open new window. Please allow pop-ups for this site.",
    );
  }
};

const Home = () => {
  return (
    <>
      <section id="background" className="fixed top-0 left-0 h-full w-full overflow-hidden">
        <Particles
            particleColors={["#000000", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={150}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
        />
      </section>
      <section
        id="header"
        className="top-0 left-0 min-h-full w-full overflow-hidden bg-black/90 transition-all duration-300 ease-in-out dark:bg-white/90"
      >
        <div className="fixed top-4 right-2 z-10">
          <Magnet padding={20}>
            <Switch />
          </Magnet>
        </div>
        <div className="flex h-screen w-screen flex-row items-center justify-between px-40">
          <div className="flex flex-col items-start">
            <SplitText
              text="I am Jake Fung,"
              className="-space-x-1 py-2 text-center text-7xl font-black text-white transition-all duration-300 ease-in-out dark:text-black"
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
              mainClassName="text-7xl -space-x-3 font-black text-center pb-3 transition-all duration-300 ease-in-out animate-fade-in-scale text-white dark:text-black"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <div className="z-10 flex flex-row items-center justify-center gap-4 pt-2">
              <button
                className="animate-fade-in-up-delay bg-linkedin hover:bg-linkedin-hover text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/funghokyeung/")
                }
              >
                <LinkedInLogoIcon className="my-1 mr-2 scale-150" />
                Connect
              </button>
              <button
                className="animate-fade-in-up-delay bg-github hover:bg-github-hover text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer"
                onClick={() => openInNewTab("https://github.com/jake-fung")}
              >
                <GitHubLogoIcon className="my-1 mr-2 scale-150" />
                GitHub
              </button>
              <button
                className="animate-fade-in-up-delay bg-linear-to-bl from-gray-600 to-gray-800 text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer hover:bg-gray-900 hover:from-gray-700 hover:to-gray-900"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1kjTseNDU-sHKJhHGmgYU86pGnAAe6BSg/view?usp=sharing",
                  )
                }
              >
                <FileIcon className="my-1 mr-2 scale-150" />
                Resumé
              </button>
            </div>
          </div>
          <img
            src="src/assets/avatar.jpg"
            className="animate-fade-in-scale z-10 h-96 rounded-full border-8 border-white p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-white/30 dark:border-black dark:hover:shadow-black/30"
            alt="avatar"
          />
        </div>
      </section>
      <MainMenu />
      <section
        id="footer"
        className="flex h-24 w-full items-center justify-center bg-black/90 text-white transition-all duration-300 ease-in-out dark:bg-white/90"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Jake Fung
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
