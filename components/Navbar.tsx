"use client";

import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Services", href: "#services", idx: "01" },
  { label: "Work", href: "#work", idx: "02" },
  { label: "About", href: "#about", idx: "03" },
  { label: "Contact", href: "#contact", idx: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const header = headerRef.current;
    if (!header) return;

    // Respect user's motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      header.classList.remove("nav-init-hidden");
      return;
    }

    const ctx = gsap.context(() => {
      // Determine if viewport is below 768px (mobile)
      const isMobile = window.innerWidth < 768;
      const circleSize = isMobile ? 56 : 64;
      const fullWidth = header.offsetWidth;
      const finalPaddingLeft = isMobile ? 18 : 24;
      const finalPaddingRight = isMobile ? 12 : 20;

      // Calculate centering padding for the square logo inside the circle
      const logoImg = header.querySelector<HTMLImageElement>(".brand-logo");
      const logoWidth = logoImg
        ? logoImg.offsetWidth || (isMobile ? 28 : 34)
        : (isMobile ? 28 : 34);
      const initialPadding = Math.max(0, Math.round((circleSize - logoWidth) / 2));

      const navLinks = desktopNavRef.current
        ? desktopNavRef.current.querySelectorAll("a")
        : [];

      // PHASE 1 — INITIAL STATE (0s)
      // Small perfect circle containing ONLY the logo at the navbar's center
      gsap.set(header, {
        width: circleSize,
        height: circleSize,
        paddingLeft: initialPadding,
        paddingRight: initialPadding,
        borderRadius: "999px",
        overflow: "hidden",
        boxSizing: "border-box",
        opacity: 0,
        scale: 0.85,
      });

      // Hide interactive elements during initial circle state
      gsap.set([desktopNavRef.current, ctaRef.current, menuButtonRef.current], {
        opacity: 0,
      });

      if (!isMobile) {
        gsap.set([desktopNavRef.current, ctaRef.current], {
          display: "none",
        });
        if (navLinks.length > 0) {
          gsap.set(navLinks, { opacity: 0, y: 8, whiteSpace: "nowrap" });
        }
      }

      // Remove the initial hidden CSS class now that GSAP controls styles
      header.classList.remove("nav-init-hidden");

      // Single coordinated GSAP timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // PHASE 5 — FINAL STATE
          // Clear GSAP inline sizing so the navbar returns 100% to clean CSS responsive design
          gsap.set(header, {
            clearProps:
              "width,height,paddingLeft,paddingRight,overflow,scale,opacity,boxSizing",
          });
          gsap.set(menuButtonRef.current, {
            clearProps: "opacity,transform",
          });
          if (!isMobile) {
            gsap.set([desktopNavRef.current, ctaRef.current], {
              clearProps: "display,opacity,transform",
            });
            if (navLinks.length > 0) {
              gsap.set(navLinks, { clearProps: "all" });
            }
          }
        },
      });

      // Smooth initial appearance of the circular logo badge
      tl.to(header, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(1.2)",
      });

      // PHASE 2 — DELAY (1s)
      // Keep the circular logo state visible for 1 full second
      tl.to({}, { duration: 1.0 });

      // PHASE 3 — CIRCULAR EXPANSION
      // Smoothly expand horizontally from circle to full pill shape using fluid power3.inOut
      tl.to(header, {
        width: fullWidth,
        paddingLeft: finalPaddingLeft,
        paddingRight: finalPaddingRight,
        duration: 0.95,
        ease: "power3.inOut",
      });

      // PHASE 4 — CONTENT REVEAL
      if (isMobile) {
        // ON MOBILE: Reveal ONLY the hamburger menu button on the right
        // Desktop links and desktop CTA button are never shown
        if (menuButtonRef.current) {
          tl.fromTo(
            menuButtonRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.32, ease: "power2.out" },
            "-=0.35"
          );
        }
      } else {
        // ON DESKTOP: Reveal navigation links and desktop CTA button
        tl.call(
          () => {
            gsap.set([desktopNavRef.current, ctaRef.current], {
              display: "",
            });
          },
          undefined,
          "-=0.42"
        );

        // Stagger in navigation links
        if (navLinks.length > 0) {
          tl.to(
            navLinks,
            {
              opacity: 1,
              y: 0,
              duration: 0.38,
              stagger: 0.055,
              ease: "power2.out",
            },
            "-=0.32"
          );
        }

        // Reveal Let's Talk CTA button
        if (ctaRef.current) {
          tl.fromTo(
            ctaRef.current,
            { opacity: 0, scale: 0.94, y: 4 },
            { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "-=0.22"
          );
        }
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header ref={headerRef} className="nav-shell nav-init-hidden">
        <a href="/" className="brand-mark brand-logo-wrap" aria-label="OFF Day Studio home">
          <img
            src="/assets/logo-off-day.png"
            alt="OFF Day Studio"
            className="brand-logo"
            width={140}
            height={34}
            style={{
              height: "34px",
              width: "auto",
              maxHeight: "34px",
              maxWidth: "160px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        {/* Desktop Navigation Links — Hidden below 768px */}
        <nav ref={desktopNavRef} className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Let's Talk CTA — Hidden below 768px */}
        <a ref={ctaRef} href="#contact" className="nav-cta">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>

        {/* Mobile Hamburger Button — Displayed below 768px */}
        <button
          ref={menuButtonRef}
          className="menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open mobile navigation menu"
          aria-expanded={open}
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Full-Screen Premium Editorial Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              clipPath: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.35,
                ease: "easeOut",
              },
            }}
          >
            {/* Mobile Menu Top Bar */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-brand">OFF DAY STUDIO</span>
              <button
                className="mobile-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Vertically Stacked Editorial Links */}
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {links.map(({ label, href, idx }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  className="mobile-nav-item"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.08,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span>
                    <span className="mobile-nav-idx">{idx}</span>
                    {label}
                  </span>
                  <ArrowUpRight size={22} color="#315CFF" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Footer CTA */}
            <div className="mobile-menu-footer">
              <a
                href="#contact"
                className="mobile-menu-cta"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
              <div className="mobile-menu-direct">
                <a href="mailto:offdaystudios@gmail.com">offdaystudios@gmail.com</a>
                <a
                  href="https://wa.me/?text=Hi%20OFF%20Day%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
