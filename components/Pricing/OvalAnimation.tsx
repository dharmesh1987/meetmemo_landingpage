"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface OvalAnimationProps {
  textData: string;
}

export default function OvalAnimation({ textData }: OvalAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when visible
          observer.disconnect(); // Disconnect after first trigger
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
    <div ref={ref} className="relative w-[220px] h-[100px] inline-block">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 220 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Centered Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-5xl font-bold text-black"
        >
          {textData}
        </text>

        {/* Adjusted oval path */}
        <motion.path
          d="M 40 50 C 20 10, 60 10, 100 10 C 140 10, 180 20, 180 50 C 180 80, 140 90, 100 90 C 60 90, 20 80, 20 50"
          fill="none"
          stroke="#FF1493"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: 0,
          }}
        />
      </svg>
    </div>
  );
}
