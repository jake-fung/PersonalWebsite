import Particles from "../components/ui/Particles.tsx";
import MainMenu from "../components/MainMenu.tsx";
import Header from "../components/Header.tsx";

const Home = () => {
  return (
    <>
      <section
        id="background"
        className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full overflow-hidden"
      >
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
      <Header />
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
