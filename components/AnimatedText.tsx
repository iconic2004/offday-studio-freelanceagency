"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedTextProps {
  text?: string;
  lines?: ReactNode[];
  split?: "lines" | "words";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  amount?: number;
}

export function AnimatedText({
  text,
  lines,
  split = "lines",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.07,
  duration = 0.82,
  amount = 0.2,
}: AnimatedTextProps) {
  const reduceMotion = useReducedMotion();
  const content = lines ?? (text ? text.split("\n") : []);
  const items = split === "words" ? content.flatMap((line) => typeof line === "string" ? line.split(" ") : [line]) : content;

  return (
    <motion.span
      className={`animated-text animated-text-${split} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: reduceMotion ? 0 : delay } },
      }}
    >
      {items.map((item, index) => (
        <span className={`animated-text-mask ${lineClassName}`} key={index}>
          <motion.span
            className="animated-text-item"
            variants={{
              hidden: reduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: "110%", filter: "blur(4px)" },
              visible: { opacity: 1, y: "0%", filter: "blur(0px)", transition: { duration, ease: [0.76, 0, 0.24, 1] } },
            }}
          >
            {item}
          </motion.span>
          {split === "words" && index < items.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
