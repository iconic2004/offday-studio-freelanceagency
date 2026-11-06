import { ContactSection } from "./ContactSection";

export function ContactFooter() {
  return (
    <>
      <ContactSection />
      <footer className="footer page-wrap relative">
        {/* LEFT COLUMN: Brand Identity */}
        <div className="footer-brand-col">
          <a href="/#top" className="brand-mark brand-logo-wrap" aria-label="Back to top">
            <img
              src="/assets/logo-off-day.png"
              alt="OFF Day Studio"
              className="brand-logo footer-logo"
              width={160}
              height={38}
              style={{
                height: "38px",
                width: "auto",
                maxHeight: "38px",
                maxWidth: "180px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>
          <p className="footer-tagline">We Build What Makes You Stand Out.</p>
        </div>

        {/* CENTER COLUMN: Navigation & Social Links */}
        <div className="footer-links-col">
          <div className="footer-nav-group">
            <span className="footer-group-label">Explore</span>
            <a href="/#services" className="footer-link">
              Services
            </a>
            <a href="/#work" className="footer-link">
              Work
            </a>
            <a href="/#about" className="footer-link">
              About
            </a>
            <a href="/#contact" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-nav-group">
            <span className="footer-group-label">Elsewhere</span>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/?text=Hi%20OFF%20Day%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp
            </a>
            <a href="mailto:offdaystudios@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Large Brand Character */}
        <div className="footer-character-col" aria-hidden="true">
          <img
            src="/assets/offday_charector-png.png"
            alt="OFF Day Studio Character"
            className="footer-character-large"
            width={200}
            height={200}
          />
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="footer-bottom">
          <span>© 2026 OFF Day Studio</span>
          <span>All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
