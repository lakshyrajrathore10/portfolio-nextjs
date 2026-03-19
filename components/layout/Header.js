"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", id: "main" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about-me" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("main");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // detect active section
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      let current = "main";
      sections.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden sm:flex items-center justify-between fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "px-5 h-12 w-[min(90vw,800px)]" : "px-7 h-14 w-[min(90vw,860px)]"
        }`}
        style={{
          background: "var(--bg-glass)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "50px",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("main")}
          style={{ cursor: "none" }}
          className="font-heading font-bold text-lg tracking-tight transition-opacity hover:opacity-75"
        >
          <span className="gradient-text" style={{ fontFamily: "var(--font-heading)" }}>LSR</span>
        </button>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                cursor: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: active === link.id ? "600" : "400",
                color: active === link.id ? "var(--text-primary)" : "var(--text-secondary)",
                position: "relative",
                padding: "6px 14px",
                borderRadius: "50px",
                background: active === link.id ? "rgba(99,102,241,0.12)" : "transparent",
                border: "none",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            cursor: "none",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            transition: "all 0.2s ease",
          }}
          className="hover:border-[var(--accent-indigo)] hover:text-[var(--accent-indigo)]"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex" }}
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="sm:hidden flex items-center justify-between fixed top-3 left-4 right-4 z-50 h-13 px-5"
        style={{
          background: "var(--bg-glass)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "50px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        <button onClick={() => scrollTo("main")} style={{ cursor: "none" }}>
          <span className="gradient-text font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>LSR</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            style={{
              cursor: "none",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
            }}
          >
            {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "none", padding: "6px", color: "var(--text-primary)" }}
            aria-label="Menu"
          >
            <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ height: "2px", background: "var(--text-primary)", borderRadius: "2px", display: "block", transition: "background 0.2s" }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{ height: "2px", background: "var(--text-primary)", borderRadius: "2px", display: "block" }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ height: "2px", background: "var(--text-primary)", borderRadius: "2px", display: "block" }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          >
            <div
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", position: "absolute", inset: 0 }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: 0, right: 0, bottom: 0,
                width: "75%",
                background: "var(--bg-secondary)",
                backdropFilter: "blur(30px)",
                borderLeft: "1px solid var(--border-subtle)",
                padding: "80px 32px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    cursor: "none",
                    textAlign: "left",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    background: active === link.id ? "rgba(99,102,241,0.15)" : "transparent",
                    border: "1px solid",
                    borderColor: active === link.id ? "rgba(99,102,241,0.3)" : "transparent",
                    color: active === link.id ? "var(--accent-indigo)" : "var(--text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "1.1rem",
                    fontWeight: active === link.id ? "600" : "400",
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
