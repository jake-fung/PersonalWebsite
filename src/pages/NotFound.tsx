import Particles from "@/components/Particles";
import FuzzyText from "@/components/FuzzyText";

const NotFound = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden bg-black/90">
        <div className="fixed top-0 left-0 h-full w-full overflow-hidden">
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
        </div>
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontFamily="Times New Roman"
            fontWeight={900}
            fontSize={296}
          >
            404
          </FuzzyText>
          <div className="mt-4">
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              fontWeight={300}
              fontSize={40}
            >
              Not Found
            </FuzzyText>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
