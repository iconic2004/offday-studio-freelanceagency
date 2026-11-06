"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode =
  | "default"
  | "button"
  | "project"
  | "service"
  | "start"
  | "call"
  | "video";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [pressed, setPressed] = useState(false);
  const mouseX = useMotionValue(-40);
  const mouseY = useMotionValue(-40);
  const smoothX = useSpring(mouseX, {
    stiffness: 900,
    damping: 50,
    mass: 0.25,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 900,
    damping: 50,
    mass: 0.25,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateSupport = () => setEnabled(mediaQuery.matches);

    updateSupport();
    mediaQuery.addEventListener("change", updateSupport);

    return () =>
      mediaQuery.removeEventListener("change", updateSupport);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const element =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(
              "a, button, [data-cursor]"
            )
          : null;

      if (!element) {
        setMode("default");
        return;
      }

      // Video hover must be checked BEFORE generic button detection
      if (element.closest(".category-project-video-button")) {
        setMode("video");
      } else if (element.closest(".project-card")) {
        setMode("project");
      } else if (element.closest(".service-row")) {
        setMode("service");
      } else if (element.dataset.cursor === "call") {
        setMode("call");
      } else if (element.dataset.cursor === "start") {
        setMode("start");
      } else if (element.matches(".button, .nav-cta, button")) {
        setMode("button");
      } else {
        setMode("default");
      }
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const label =
    mode === "video"
      ? "SEE VIDEO"
      : mode === "project"
        ? "VIEW ↗"
        : mode === "service"
          ? "EXPLORE ↗"
          : mode === "call"
            ? "CALL ↗"
            : mode === "start"
              ? "START ↗"
              : mode === "button"
                ? "LET'S TALK ↗"
                : "";

  return (
    <motion.div
      className={`custom-cursor cursor-${mode} ${
        pressed ? "is-pressed" : ""
      }`}
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    >
      <svg
        className="cursor-pointer"
        width="37"
        height="47"
        viewBox="0 0 37 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 2.3L34.25 29.8L21.2 31.35L28.2 44.4L20.3 47L13.15 34L3.2 41.2L2.5 2.3Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M3 3L33 29L19.3 30.65L26.8 44L21 45.8L13.55 32.2L4.5 38.8L3 3Z"
          fill="#292929"
        />
      </svg>

      {label && <span className="cursor-label">{label}</span>}
    </motion.div>
  );
}