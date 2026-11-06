import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { process } from "@/lib/data";
import { AnimatedText } from "./AnimatedText";
import { WaterRevealText } from "./WaterRevealText";

export function About() {
  return (
    <>
      <section id="about" className="about-section page-wrap relative">
        <Reveal>
          <div className="flex items-center gap-2">
            <p className="eyebrow">04 / THE STUDIO</p>
          </div>
          <div className="about-layout">
            <h2>
              <AnimatedText
                lines={[
                  <span key="about-heading">
                    One studio.
                    <br />
                    <em>
                      <WaterRevealText>Everything</WaterRevealText>
                    </em>
                    <br />
                    your brand needs.
                  </span>,
                ]}
              />
            </h2>
            <div className="about-side">
              <p>
                OFF Day Studio is a creative digital studio built for brands
                that refuse to blend in.
              </p>
              <div className="about-equation">
                DESIGN <span>×</span> TECHNOLOGY <span>×</span>
                <br /> CONTENT <span>×</span> GROWTH
              </div>
              <a href="#contact" className="text-link" data-cursor="start">
                Meet the studio <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="process-section page-wrap relative">
        <div className="section-intro process-intro">
          <Reveal>
            <div className="flex items-center gap-2">
              <p className="eyebrow">05 / OUR PROCESS</p>
            </div>
            <h2>
              <AnimatedText
                lines={[
                  <span key="process-heading">
                    How we{" "}
                    <em>
                      <WaterRevealText>work.</WaterRevealText>
                    </em>
                  </span>,
                ]}
              />
            </h2>
          </Reveal>
        </div>

        <div className="process-grid">
          {process.map(([number, title, description], i) => (
            <Reveal key={number} delay={i * 0.05}>
              <div className="process-item group">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
