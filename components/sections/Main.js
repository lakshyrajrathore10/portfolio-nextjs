"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiNextdotjs } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";

import ParticleCanvas from "../ui/ParticleCanvas";
import { FloatingGeometry, FloatingRing } from "../ui/FloatingElements";
import StatCard from "../ui/StatCard";

const ROLES = ["Mobile App Developer", "Web Developer", "Frontend Developer", "Engineer", "Designer", "React Developer"];

const SOCIAL = [
  { icon: FaGithub, href: "https://github.com/lakshyrajrathore10", label: "GitHub", color: "#e2e8f0" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lakshyraj-singh-rathore-272361265", label: "LinkedIn", color: "#0ea5e9" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/lakshyraj10/", label: "LeetCode", color: "#f97316" },
  { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/user/lakshyrajsingh10/", label: "GeeksForGeeks", color: "#10b981" },
];

const FLOATING_BADGES = [
  { icon: FaReact, label: "React", color: "#61dafb", top: "8%", left: "-30px", delay: 0 },
  { icon: SiNextdotjs, label: "Next.js", color: "#e2e8f0", top: "35%", right: "-28px", delay: 1 },
  { icon: FaReact, label: "React Native", color: "#61dafb", bottom: "35%", left: "-30px", delay: 2 },
  { icon: FaNodeJs, label: "Node.js", color: "#68a063", bottom: "10%", right: "-25px", delay: 1.5 },
];

const STATS = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 100, suffix: "+", label: "LeetCode Streak" },
  { value: 3, suffix: "+", label: "Years Coding" },
];

const Main = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);

  // Mouse parallax for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Typewriter
  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // GSAP orbs + floating elements
  useEffect(() => {
    gsap.to(".orb-1", { x: 40, y: -30, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orb-2", { x: -50, y: 40, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orb-3", { x: 30, y: 50, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orb-4", { x: -30, y: -40, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div
      id="main"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
        perspective: "1200px",
      }}
    >
      {/* Particle network canvas */}
      <ParticleCanvas />

      {/* Background Orbs */}
      <div className="orb-1" style={{ position: "absolute", top: "10%", left: "5%", width: "clamp(280px, 35vw, 500px)", height: "clamp(280px, 35vw, 500px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div className="orb-2" style={{ position: "absolute", bottom: "10%", right: "5%", width: "clamp(240px, 30vw, 420px)", height: "clamp(240px, 30vw, 420px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div className="orb-3" style={{ position: "absolute", top: "55%", left: "40%", width: "clamp(180px, 22vw, 320px)", height: "clamp(180px, 22vw, 320px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0 }} />
      <div className="orb-4" style={{ position: "absolute", top: "20%", right: "20%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none", zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)",
        }}
      />

      {/* 3D Floating Geometries in background */}
      <FloatingGeometry style={{ top: "12%", left: "2%", zIndex: 0, opacity: 0.6 }} color="rgba(99,102,241,0.7)" size={50} delay={0} />
      <FloatingGeometry style={{ bottom: "15%", left: "8%", zIndex: 0, opacity: 0.4 }} color="rgba(6,182,212,0.7)" size={35} delay={3} />
      <FloatingGeometry style={{ top: "20%", right: "3%", zIndex: 0, opacity: 0.5 }} color="rgba(168,85,247,0.7)" size={44} delay={1.5} />
      <FloatingGeometry style={{ bottom: "25%", right: "6%", zIndex: 0, opacity: 0.35 }} color="rgba(236,72,153,0.7)" size={30} delay={2} />

      {/* Floating Rings */}
      <FloatingRing style={{ top: "5%", right: "15%", zIndex: 0, opacity: 0.25 }} color="rgba(99,102,241,0.8)" size="120px" delay={0} />
      <FloatingRing style={{ bottom: "8%", left: "15%", zIndex: 0, opacity: 0.2 }} color="rgba(6,182,212,0.8)" size="80px" delay={4} />

      {/* Noise texture for premium feel */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        mixBlendMode: "overlay",
      }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "clamp(40px, 8vw, 80px)", paddingBottom: "clamp(80px, 15vw, 120px)" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "clamp(40px, 8vw, 64px)", flexWrap: "wrap" }}>

          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ flex: "1 1 min(100%, 420px)", minWidth: 0 }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="section-label" style={{ marginBottom: "24px" }}>
                <HiOutlineSparkles size={12} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} style={{ marginBottom: "8px" }}>
              <span style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Lakshyraj Singh Rathore
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "20px",
                color: "var(--text-primary)",
              }}
            >
              Building Digital
              <br />
              <span className="gradient-text">Experiences</span>
              <br />
              That Inspire.
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              style={{
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: "var(--text-secondary)",
                marginBottom: "20px",
                minHeight: "2.2em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <span>I am a </span>
              <span style={{ color: "var(--accent-cyan)" }}>
                {displayed}
                <span style={{ opacity: showCursor ? 1 : 0, color: "var(--accent-indigo)", fontWeight: 300 }}>|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{ color: "var(--text-secondary)", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.75, marginBottom: "36px", maxWidth: "480px" }}
            >
              Final-year CS student crafting pixel-perfect, responsive interfaces
              with modern web technologies. Turning complex designs into clean,
              performant code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
              <button onClick={() => scrollToSection("contact")} className="btn-primary" style={{ flex: "1 1 max-content" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" /><polyline points="20,6 12,13 4,6" /></svg>
                Hire Me
              </button>
              <button onClick={() => scrollToSection("projects")} className="btn-outline" style={{ flex: "1 1 max-content" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                View Projects
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "36px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Find me on
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{ width: "38px", height: "38px", borderRadius: "10px", border: "1px solid var(--border-subtle)", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s ease", fontSize: "1.1rem" }}
                    className="social-link"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}33`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Animated Stats Row */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", width: "100%" }}
            >
              {[
                { value: 15, suffix: "+", label: "Projects Built" },
                { value: 100, suffix: "+", label: "LeetCode Streak" },
                { value: 3, suffix: "+", label: "Years Coding" },
              ].map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — 3D Profile Image with tilt + floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", position: "relative", perspective: "800px", marginTop: "clamp(20px, 6vw, 40px)" }}
          >
            {/* 3D Tilt wrapper */}
            <motion.div
              ref={imageWrapRef}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Decorative rings */}
              <div className="animate-spin-slow" style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1.5px dashed rgba(99,102,241,0.25)" }} />
              <div className="animate-spin-reverse" style={{ position: "absolute", inset: "-48px", borderRadius: "50%", border: "1px dashed rgba(6,182,212,0.18)" }} />

              {/* Extra 3D ring */}
              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-70px",
                  borderRadius: "50%",
                  border: "1px solid rgba(168,85,247,0.12)",
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Glow */}
              <div className="animate-glow" style={{ position: "absolute", inset: "-8px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", filter: "blur(20px)" }} />

              {/* Image */}
              <div style={{
                width: "clamp(220px, 45vw, 360px)",
                height: "clamp(220px, 45vw, 360px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(99,102,241,0.4)",
                boxShadow: "0 0 0 8px rgba(99,102,241,0.08), 0 24px 60px rgba(0,0,0,0.5)",
                position: "relative",
                zIndex: 1,
                transform: "translateZ(20px)",
              }}>
                <img
                  src="./image.png"
                  alt="Lakshyraj Singh Rathore"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Floating Tech Badges */}
              {FLOATING_BADGES.map(({ icon: Icon, label, color, delay, ...pos }) => {
                // Adjust position keys to be safe percentages instead of raw pixels if they exceed bounds, 
                // but let's just scale them down on small devices using CSS bounds.
                return (
                  <motion.div
                    key={label}
                    animate={{ y: [-6, 6, -6], rotateZ: [-2, 2, -2] }}
                    transition={{ duration: 3 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay }}
                    style={{
                      position: "absolute",
                      ...pos,
                      // Override raw pixels with clamp or safe calc
                      left: pos.left ? `calc(${pos.left} + clamp(0px, 2vw, 15px))` : undefined,
                      right: pos.right ? `calc(${pos.right} + clamp(0px, 2vw, 15px))` : undefined,
                      background: "var(--bg-glass)",
                      backdropFilter: "blur(14px)",
                      border: `1px solid ${color}44`,
                      borderRadius: "12px",
                      padding: "clamp(4px, 1vw, 8px) clamp(8px, 2vw, 12px)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: `0 8px 24px rgba(0,0,0,0.3), 0 0 12px ${color}22`,
                      zIndex: 10,
                      transform: "translateZ(40px)",
                    }}
                  >
                    <Icon style={{ color, fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }} />
                    <span style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)", fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>{label}</span>
                  </motion.div>
                );
              })}

              {/* Open to Work Badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "10%",
                  right: "-5%",
                  background: "var(--bg-glass)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border-accent)",
                  borderRadius: "12px",
                  padding: "clamp(6px, 1.5vw, 10px) clamp(10px, 2.5vw, 14px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  zIndex: 10,
                  transform: "translateZ(50px)",
                }}
              >
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", animation: "glow-pulse 2s infinite" }} />
                <span style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)", fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  Open to work
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("skills")}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "32px", height: "48px", borderRadius: "16px", border: "1.5px solid var(--border-subtle)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "6px" }}
          >
            <div style={{ width: "4px", height: "8px", background: "var(--accent-indigo)", borderRadius: "2px" }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;