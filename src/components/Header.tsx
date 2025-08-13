import SplitText from "./ui/SplitText.tsx";
import RotatingText from "./ui/RotatingText.tsx";
import Magnet from "./ui/Magnet.tsx";
import Switch from "./ui/Switch.tsx";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  FileIcon,
} from "@radix-ui/react-icons";

const Header = () => {
  // Function to open a URL in a new tab with security features
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

  return (
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
            texts={["a web developer.", "a UBC student.", "a Hongkonger."]}
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
          <div className="relative z-10 flex flex-row items-center justify-center gap-4 pt-2">
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
  );
};

export default Header;
