"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="statement-section relative overflow-hidden">
      <div className="page-wrap statement-inner relative z-10">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-neutral-400">02 / POINT OF VIEW</p>
        </div>

        <motion.div style={{ x }} className="statement-line muted">
          <AnimatedText text="WE DON'T MAKE" />
        </motion.div>

        <div className="statement-line">
          <AnimatedText text="BRANDS LOOK GOOD." delay={0.08} />
        </div>

        <div className="statement-line accent relative inline-block">
          <AnimatedText
            lines={[
              <WaterRevealText key="statement-accent">
                WE MAKE THEM
              </WaterRevealText>,
            ]}
            delay={0.16}
          />
          <svg
            className="statement-scribble-circle"
            viewBox="0 0 450 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M12 55C12 25 100 12 225 12C350 12 438 28 438 55C438 82 340 98 220 98C90 98 8 80 18 42C25 18 90 20 160 22"
              stroke="#315CFF"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="statement-line">
          <AnimatedText text="IMPOSSIBLE TO IGNORE." delay={0.24} />
        </div>
      </div>
    </section>
  );
}
