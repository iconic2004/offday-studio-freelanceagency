"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href^='#']") : null;
      if (!target) return;
      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      const section = document.querySelector(hash);
      if (!section) return;
      event.preventDefault();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
