"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";

export function Hero() {
  return (
    <section id="top" className="hero-section page-wrap">
      <div className="hero-copy">
        <motion.div
          className="hero-eyebrow-wrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="eyebrow">
            OFF DAY STUDIO <span>/</span> CREATIVE DIGITAL AGENCY
          </p>
          <span className="scribble-tag">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="scribble-star">
              <path
                d="M12 2L14.2 8.8L21 9.2L15.8 13.5L17.5 20.2L12 16.3L6.5 20.2L8.2 13.5L3 9.2L9.8 8.8L12 2Z"
                stroke="#315CFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.div>

        <h1>
          <AnimatedText
            lines={[
              "Your brand deserves",
              <span key="accent" className="relative inline-block">
                to <WaterRevealText>stand out.</WaterRevealText>
                <svg
                  className="scribble-underline"
                  viewBox="0 0 240 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M3 13C50 4 120 15 237 6C160 18 80 10 20 14"
                    stroke="#315CFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </span>,
            ]}
            delay={0.1}
          />
        </h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            We build websites, identities, content and digital experiences that turn
            attention into impact.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-dark" data-cursor="start">
              Start a project <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="text-link">
              Explore our work <ArrowDown size={15} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="studio-interface relative"
        initial={{ opacity: 0, y: 30, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="character-badge" aria-hidden="true">
          <img
            src="/assets/offday_charector-png.png"
            alt=""
            className="character-sticker"
          />
        </div>

        <div className="interface-top">
          <span>OFF DAY / SELECTED OUTPUT</span>
          <span>2026</span>
        </div>

        <div className="interface-list">
          {["WEB / APP DEV", "BRAND", "CONTENT", "SOCIAL", "MARKETING"].map(
            (item, i) => (
              <div key={item}>
                <span>0{i + 1}</span>
                <strong>{item}</strong>
                <span className="interface-dot" />
              </div>
            )
          )}
        </div>

        <div className="interface-foot">
          <span>BUILD WHAT MATTERS</span>
          <span className="interface-arrow">↗</span>
        </div>
      </motion.div>
    </section>
  );
}
