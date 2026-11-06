"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DESKTOP_PATH =
  "M 680,240 " +
  "C 850,380 1180,480 1200,700 " +
  "C 1220,920 920,1050 680,1220 " +
  "C 420,1400 220,1580 340,1850 " +
  "C 420,2050 960,2150 1080,2400 " +
  "C 1200,2650 900,2900 520,3100 " +
  "C 260,3250 360,3450 680,3600 " +
  "C 740,3640 760,3660 740,3680";

const MOBILE_PATH =
  "M 30,140 " +
  "C 65,320 40,600 30,850 " +
  "C 20,1100 60,1400 35,1750 " +
  "C 15,2050 65,2350 30,2650 " +
  "C 10,2900 55,3100 35,3320";

export function BlueThread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Finish 100% of the path drawing before the contact section arrives
  const pathLength = useTransform(
    smoothProgress,
    [0, 0.94],
    [0, 1],
    { clamp: true }
  );

  return (
    <div
      ref={containerRef}
      className="blue-thread-container"
      aria-hidden="true"
    >
      {/* Desktop Blue Thread — Bounded strictly above Contact */}
      <svg
        className="blue-thread-svg desktop-only"
        viewBox="0 0 1440 3800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Faint track line ending precisely before Contact */}
        <path
          d={DESKTOP_PATH}
          stroke="rgba(49, 92, 255, 0.08)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Animated Electric Blue Thread */}
        <motion.path
          d={DESKTOP_PATH}
          stroke="#315CFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength: shouldReduceMotion ? 1 : mounted ? pathLength : 0,
          }}
        />
      </svg>

      {/* Mobile Simplified Blue Thread — Bounded strictly above Contact */}
      <svg
        className="blue-thread-svg mobile-only"
        viewBox="0 0 390 3400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d={MOBILE_PATH}
          stroke="rgba(49, 92, 255, 0.08)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <motion.path
          d={MOBILE_PATH}
          stroke="#315CFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength: shouldReduceMotion ? 1 : mounted ? pathLength : 0,
          }}
        />
      </svg>
    </div>
  );
}
