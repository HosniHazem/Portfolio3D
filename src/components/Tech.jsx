/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Suspense, useState, useEffect, useRef, memo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Simple loader
const BallLoader = () => <div className="w-28 h-28" />;

// Memoized ManagedBall to prevent unnecessary re-renders
const ManagedBall = memo(({ technology }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hasBeenVisible = useRef(false); // Cache visibility state

  useEffect(() => {
    if (hasBeenVisible.current) return; // Skip if already visible

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasBeenVisible.current = true; // Mark as visible
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const element = document.getElementById(`ball-${technology.name}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [technology.name]);

  return (
    <div id={`ball-${technology.name}`} className="w-28 h-28">
      <Suspense fallback={<BallLoader />}>
        {isVisible && <BallCanvas icon={technology.icon} />}
      </Suspense>
    </div>
  );
});

const Tech = () => {
  const [maxVisible, setMaxVisible] = useState(20);

  useEffect(() => {
    // Set max visible balls based on device capabilities
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setMaxVisible(isMobile ? 10 : 20); // Reduce visible balls on mobile
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.slice(0, maxVisible).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <ManagedBall technology={technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
