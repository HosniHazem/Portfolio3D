/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Suspense, lazy, useState, useEffect } from "react";

// Lazy load the 3D component
const LazyComputersCanvas = lazy(() => import("./canvas/Computers"));

const LoadingFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#915EFF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollIndicator = () => (
  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
);

const Hero = () => {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const match = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(match);
    };

    // Check if the device has enough memory and processing power
    const checkPerformance = () => {
      const hasGoodPerformance =
        // Check if device has enough memory (>4GB)
        (navigator?.deviceMemory || 4) >= 4 &&
        // Check if device has enough logical processors
        (navigator?.hardwareConcurrency || 4) >= 4;

      return hasGoodPerformance;
    };

    // Only render 3D on desktop with good performance
    setShouldRender3D(!isMobile && checkPerformance());

    // Set up resize listener
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hazem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop Web <br className="sm:block hidden" />
            and Mobile Applications
          </p>
        </div>
      </div>

      {shouldRender3D ? (
        <Suspense fallback={<LoadingFallback />}>
          <LazyComputersCanvas />
        </Suspense>
      ) : (
        // Fallback static content for mobile or low-performance devices
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <LoadingFallback />
        </div>
      )}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
