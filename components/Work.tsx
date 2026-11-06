"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";
import ksCoverImg from "@/app/assets/ks-cover-img.png";
import designerMonkCoverImg from "@/app/assets/the-desM-cover-img.png";
import graphicDesignImg from "@/app/assets/graphic-design.png";

export function Work() {
  return (
    <section id="work" className="section work-section page-wrap relative">
      <div className="section-intro work-intro">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="eyebrow">03 / OUR PORTFOLIO</p>
            <span className="scribble-badge">SELECTED</span>
          </div>

          <h2>
            <AnimatedText
              lines={[
                <span key="work-heading">
                  Made to be
                  <br />
                  <em>
                    <WaterRevealText>remembered.</WaterRevealText>
                  </em>
                </span>,
              ]}
            />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="intro-note">
            A few things we&apos;ve built, shaped and brought to life.
            Every project designed to leave an impression.
          </p>
        </Reveal>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <motion.a
              href={
                i === 0
                  ? "https://knownstrangers.in/"
                  : i === 1
                    ? "/services/visual"
                    : i === 2
                      ? "https://thedesignermonk.in/"
                      : "#contact"
              }
              target={i === 0 || i === 2 ? "_blank" : undefined}
              rel={
                i === 0 || i === 2
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`project-card project-${i + 1}`}
              whileHover="hover"
              data-cursor="project"
            >
              <div className={`project-visual visual-${project.tone}`}>
                {i === 0 ? (
                  <img
                    src={ksCoverImg.src}
                    alt="KnownStrangers website"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : i === 1 ? (
                  <img
                    src={graphicDesignImg.src}
                    alt="Graphic design work"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : i === 2 ? (
                  <img
                    src={designerMonkCoverImg.src}
                    alt="Designer Monk website"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <span className="visual-mark">
                    {i === 1 ? "N" : "A"}
                  </span>
                )}

                <span className="visual-caption">
                  {project.number} / OFF DAY STUDIO
                </span>
              </div>

              <div className="project-meta">
                <div>
                  <p>{project.categories}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>

                <span className="project-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
