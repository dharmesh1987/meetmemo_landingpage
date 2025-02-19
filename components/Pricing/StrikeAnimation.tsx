'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function StrikethroughAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
          observer.disconnect(); // Stop observing after animation triggers
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Straight diagonal strike-through line from top-right to bottom-left */}
      <motion.path
        d="M100 0 L0 100"
        fill="none"
        stroke="rgb(99 102 241)"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : {}}
        transition={{
          duration: 0.8, // Duration of the animation
          ease: "easeInOut"
        }}
      />
    </svg>
  );
}

export default StrikethroughAnimation;
