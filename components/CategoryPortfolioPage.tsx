"use client";

import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioCategories } from "@/lib/data";
import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";
import { WaterRevealText } from "./WaterRevealText";

type SelectedMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
    };

export function CategoryPortfolioPage({ slug }: { slug: string }) {
  const category = portfolioCategories[slug];

  const [selectedMedia, setSelectedMedia] =
    useState<SelectedMedia | null>(null);

  const isSocial = slug === "social";
  const isGrowth = slug === "growth";

  useEffect(() => {
    if (!selectedMedia) return;

    const previousBodyOverflow = document.body.style.overflow;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMedia]);

  if (!category) return null;

  return (
    <main className="category-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="category-hero page-wrap">
        <div className="category-top-bar"><Link href="/" className="brand-logo-wrap" aria-label="OFF Day Studio home"><img src="/assets/logo-off-day.png" alt="OFF Day Studio" className="brand-logo" width="140" height="34" style={{ height: "34px", width: "auto", maxHeight: "34px", maxWidth: "160px", objectFit: "contain", display: "block" }} /></Link><Link href="/#services" className="text-link category-back-link">
          <ArrowLeft size={15} />
          Back to Services
        </Link></div>

        <div className="category-heading">
          <Reveal>
            <p className="eyebrow">
              {category.number} / {category.label}
            </p>

            <h1>
              <AnimatedText
                lines={[
                  <span key={category.label}>
                    {category.title.split(" / ")[0]}{" "}
                    <em>
                      <WaterRevealText>
                        {category.title.split(" / ")[1]}
                      </WaterRevealText>
                    </em>
                  </span>,
                ]}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="category-description">
              {category.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          GROWTH PAGE
      ====================================================== */}

      {isGrowth ? (
        <section className="category-work page-wrap">
          <div className="growth-page-content">
            {/* =================================================
                WHAT WE DO
            ================================================== */}

            <section className="growth-section growth-services-section">
              <div className="growth-section-header">
                <p className="eyebrow">WHAT WE DO</p>

                <p className="growth-section-count">
                  04 SERVICES
                </p>
              </div>

              <div className="growth-services">
                {[
                  {
                    number: "01",
                    title: "Performance Marketing",
                    description:
                      "Paid campaigns built to reach the right audience, generate demand and drive measurable action.",
                  },
                  {
                    number: "02",
                    title: "SEO & Organic Growth",
                    description:
                      "Search strategies that help your brand become easier to discover and harder to forget.",
                  },
                  {
                    number: "03",
                    title: "Conversion & Funnels",
                    description:
                      "Landing pages, funnels and conversion systems designed to turn attention into action.",
                  },
                  {
                    number: "04",
                    title: "Campaign Strategy",
                    description:
                      "Campaigns built around the right audience, message, creative and channel.",
                  },
                ].map((service, index) => (
                  <Reveal
                    key={service.number}
                    delay={index * 0.08}
                  >
                    <div className="growth-service-row">
                      <span className="growth-service-number">
                        {service.number}
                      </span>

                      <h2>{service.title}</h2>

                      <p>{service.description}</p>

                      <span className="growth-service-arrow">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* =================================================
                THE GROWTH LOOP
            ================================================== */}

            <section className="growth-section growth-loop-section">
              <div className="growth-section-header">
                <p className="eyebrow">THE GROWTH LOOP</p>

                <p className="growth-section-count">
                  04 STEPS
                </p>
              </div>

              <div className="growth-loop">
                {[
                  {
                    number: "01",
                    title: "ATTRACT",
                    description:
                      "Get discovered by the right people.",
                    items:
                      "SEO / PAID MEDIA / CAMPAIGNS",
                  },
                  {
                    number: "02",
                    title: "ENGAGE",
                    description:
                      "Give people a reason to care.",
                    items:
                      "CONTENT / CREATIVE / SOCIAL",
                  },
                  {
                    number: "03",
                    title: "CONVERT",
                    description:
                      "Turn attention into action.",
                    items:
                      "WEBSITES / LANDING PAGES / FUNNELS",
                  },
                  {
                    number: "04",
                    title: "OPTIMISE",
                    description:
                      "Learn what works. Scale it.",
                    items:
                      "ANALYTICS / TESTING / PERFORMANCE",
                  },
                ].map((step, index) => (
                  <Reveal
                    key={step.number}
                    delay={index * 0.08}
                  >
                    <div className="growth-step">
                      <span className="growth-step-number">
                        {step.number}
                      </span>

                      <h2>{step.title}</h2>

                      <p>{step.description}</p>

                      <span className="growth-step-items">
                        {step.items}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* =================================================
                THE REAL PROBLEM
            ================================================== */}

            <section className="growth-problem">
              <Reveal>
                <p className="eyebrow">
                  THE REAL PROBLEM
                </p>

                <h2>
                  MORE TRAFFIC
                  <br />
                  DOESN&apos;T ALWAYS MEAN
                  <br />
                  <em>MORE BUSINESS.</em>
                </h2>

                <p>
                  We look beyond clicks, likes and
                  impressions to understand where growth is
                  getting lost — and build the system to fix
                  it.
                </p>
              </Reveal>
            </section>

            {/* =================================================
                FINAL CTA
            ================================================== */}

            <section className="growth-final-cta">
              <Reveal>
                <p className="eyebrow">
                  READY TO GROW?
                </p>

                <h2>
                  TURN ATTENTION
                  <br />
                  INTO <em>GROWTH.</em>
                </h2>

                <Link
                  href="/#contact"
                  className="growth-cta"
                >
                  BOOK A CALL <ArrowUpRight size={17} />
                </Link>
              </Reveal>
            </section>
          </div>
        </section>
      ) : (
        <>
          {/* =================================================
              EXISTING CATEGORY HEADER
          ================================================== */}

          <section className="category-work page-wrap">
            <div className="category-work-header">
              <p className="eyebrow">HERE IS OUR WORK</p>

              <p className="category-work-count">
                {category.projects.length
                  .toString()
                  .padStart(2, "0")}{" "}
                {isSocial ? "ACCOUNTS" : "PROJECTS"}
              </p>
            </div>

            {/* =================================================
                PROJECTS
            ================================================== */}

            {category.projects.length > 0 ? (
              <div
                className={
                  isSocial
                    ? "social-profile-grid"
                    : "category-project-grid"
                }
              >
                {category.projects.map((project, index) => {
                  /* -----------------------------------------
                     SOCIAL PROFILE CARD
                  ----------------------------------------- */

                  if (isSocial) {
                    const socialCard = (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-profile-card"
                        data-cursor="social"
                      >
                        <div className="social-profile-image">
                          {project.image ? (
                            <>
                              <img
                                src={project.image}
                                alt={`${project.title} Instagram profile`}
                              />

                              <span
                                className="social-stats-blur"
                                aria-hidden="true"
                              />
                            </>
                          ) : (
                            <span className="category-project-placeholder">
                              {project.title
                                .slice(0, 2)
                                .toUpperCase()}
                            </span>
                          )}
                        </div>

                        <div className="social-profile-info">
                          <div className="social-profile-info-top">
                            <div>
                              <p className="social-profile-label">
                                INSTAGRAM
                              </p>

                              <h2>{project.title}</h2>
                            </div>

                            <span className="social-profile-arrow">
                              <ArrowUpRight size={20} />
                            </span>
                          </div>

                          <div className="social-profile-bottom">
                            <span className="social-profile-handle">
                              {project.url
                                ?.replace(
                                  "https://www.instagram.com/",
                                  "@"
                                )
                                .replace("/", "")}
                            </span>

                            <span className="social-profile-visit">
                              Visit Profile
                              <ArrowUpRight size={15} />
                            </span>
                          </div>
                        </div>
                      </a>
                    );

                    return (
                      <Reveal
                        key={project.title}
                        delay={index * 0.08}
                      >
                        {socialCard}
                      </Reveal>
                    );
                  }

                  /* -----------------------------------------
                     NORMAL DIGITAL / VISUAL / CONTENT CARD
                  ----------------------------------------- */

                  const content = (
                    <>
                      <div
                        className={`category-project-visual visual-${category.tone}`}
                      >
                        {project.videos?.length ? (
                          <div className="category-project-video-gallery">
                            {project.videos.map(
                              (video, videoIndex) => (
                                <button
                                  key={video}
                                  type="button"
                                  className="category-project-video-button"
                                  onClick={() =>
                                    setSelectedMedia({
                                      type: "video",
                                      src: video,
                                      alt: `${project.title} video preview ${
                                        videoIndex + 1
                                      }`,
                                    })
                                  }
                                  aria-label={`Open ${project.title} video ${
                                    videoIndex + 1
                                  }`}
                                >
                                  <video
                                    src={video}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                  />

                                  <span className="category-video-play">
                                    ↗
                                  </span>
                                </button>
                              )
                            )}
                          </div>
                        ) : project.images?.length ? (
                          <div className="category-project-gallery">
                            {project.images.map(
                              (image, imageIndex) => (
                                <button
                                  key={image}
                                  type="button"
                                  className="category-project-image-button"
                                  onClick={() =>
                                    setSelectedMedia({
                                      type: "image",
                                      src: image,
                                      alt: `${project.title} project preview ${
                                        imageIndex + 1
                                      }`,
                                    })
                                  }
                                  aria-label={`Open ${project.title} project preview ${
                                    imageIndex + 1
                                  }`}
                                >
                                  <img
                                    src={image}
                                    alt={`${project.title} project preview ${
                                      imageIndex + 1
                                    }`}
                                  />
                                </button>
                              )
                            )}
                          </div>
                        ) : project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                          />
                        ) : project.video ? (
                          <video
                            src={project.video}
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <span className="category-project-placeholder">
                            {project.title
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        )}

                        <span className="visual-caption">
                          {category.number} / OFF DAY STUDIO
                        </span>
                      </div>

                      <div className="category-project-meta">
                        <div>
                          <p>{project.categories}</p>

                          <h2>{project.title}</h2>

                          <span>{project.description}</span>
                        </div>

                        <span className="project-arrow">
                          <ArrowUpRight size={20} />
                        </span>
                      </div>
                    </>
                  );

                  return (
                    <Reveal
                      key={project.title}
                      delay={index * 0.08}
                    >
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="category-project-card"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="category-project-card">
                          {content}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              /* -----------------------------------------
                 EMPTY STATE
              ----------------------------------------- */

              <Reveal>
                <div
                  className={`category-empty visual-${category.tone}`}
                >
                  <p className="eyebrow">IN PROGRESS</p>

                  <h2>New work is taking shape.</h2>

                  <p>
                    Published{" "}
                    {category.label.toLowerCase()} projects
                    will appear here as they launch.
                  </p>
                </div>
              </Reveal>
            )}
          </section>
        </>
      )}

      {/* =====================================================
          IMAGE / VIDEO LIGHTBOX
      ====================================================== */}

      {selectedMedia && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project preview"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close expanded project preview"
          >
            <X size={22} />
          </button>

          {selectedMedia.type === "video" ? (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              playsInline
              onClick={(event) =>
                event.stopPropagation()
              }
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              onClick={(event) =>
                event.stopPropagation()
              }
            />
          )}
        </div>
      )}
    </main>
  );
}
