"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HORIZONTAL_CARDS = [
  {
    num: "01",
    title: "React & Next.js",
    desc: "Building blazing-fast web apps with SSR, ISR, and App Router. Clean component architecture meets peak performance.",
    color: "#61dafb",
    bg: "linear-gradient(135deg, rgba(97,218,251,0.12) 0%, rgba(6,182,212,0.05) 100%)",
    icon: "⚛️",
  },
  {
    num: "02",
    title: "React Native",
    desc: "Cross-platform mobile experiences that feel native. Shared codebase, pixel-perfect UI on both iOS and Android.",
    color: "#06b6d4",
    bg: "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.05) 100%)",
    icon: "📱",
  },
  {
    num: "03",
    title: "Node & Express",
    desc: "RESTful APIs and server-side logic built with Node.js. Authentication, middleware, and seamless database integrations.",
    color: "#68a063",
    bg: "linear-gradient(135deg, rgba(104,160,99,0.12) 0%, rgba(16,185,129,0.05) 100%)",
    icon: "🟢",
  },
  {
    num: "04",
    title: "UI/UX Design",
    desc: "Crafting interfaces that wow at first glance. Glassmorphism, micro-animations, and premium design systems.",
    color: "#a855f7",
    bg: "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.05) 100%)",
    icon: "✨",
  },
  {
    num: "05",
    title: "Problem Solving",
    desc: "100+ day LeetCode streak. Data structures, algorithms, and competitive programming — engineering fundamentals first.",
    color: "#f97316",
    bg: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(234,179,8,0.05) 100%)",
    icon: "🧠",
  },
];

const ProgressDots = ({ scrollYProgress, count }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActive(Math.min(Math.floor(v * count), count - 1));
    });
  }, [scrollYProgress, count]);

  return (
    <div style={{
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: i === active ? "28px" : "10px",
            background: i === active ? "#6366f1" : "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ height: "4px", borderRadius: "2px" }}
        />
      ))}
    </div>
  );
};

export const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(HORIZONTAL_CARDS.length - 1) * 100 / HORIZONTAL_CARDS.length * 0.88}%`]
  );
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={sectionRef}
      style={{
        height: isMobile ? "auto" : `${HORIZONTAL_CARDS.length * 100}vh`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          paddingTop: isMobile ? "60px" : "0",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "60px",
            left: isMobile ? "0" : "clamp(24px, 5vw, 80px)",
            padding: isMobile ? "0 clamp(24px, 5vw, 80px)" : "0",
            marginBottom: isMobile ? "40px" : "0",
            zIndex: 10,
            alignSelf: "flex-start",
          }}
        >
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent-indigo)",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
            padding: "5px 12px",
            borderRadius: "50px",
          }}>
            What I Do
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginTop: "12px",
            lineHeight: 1.1,
          }}>
            My <span style={{
              background: "linear-gradient(90deg, #6366f1, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Expertise</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            marginTop: "8px",
          }}>
            {isMobile ? "Swipe to explore →" : "Scroll to explore →"}
          </p>
        </motion.div>

        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "24px",
            paddingLeft: "clamp(24px, 5vw, 80px)",
            paddingRight: "80px",
            x: isMobile ? 0 : smoothX,
            willChange: isMobile ? "auto" : "transform",
            marginTop: isMobile ? "0" : "80px",
            marginBottom: isMobile ? "80px" : "0",
            overflowX: isMobile ? "auto" : "visible",
            scrollSnapType: isMobile ? "x mandatory" : "none",
            WebkitOverflowScrolling: "touch",
            paddingBottom: isMobile ? "20px" : "0",
            width: "100%",
          }}
          className={isMobile ? "hide-scrollbar" : ""}
        >
          {HORIZONTAL_CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
              whileHover={isMobile ? {} : { y: -12, rotateY: -5, scale: 1.02 }}
              style={{
                flex: "0 0 clamp(280px, 80vw, 380px)",
                height: "420px",
                borderRadius: "28px",
                background: card.bg,
                border: `1px solid ${card.color}30`,
                backdropFilter: "blur(20px)",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${card.color}10`,
                transformStyle: "preserve-3d",
                cursor: "default",
                scrollSnapAlign: isMobile ? "center" : "none",
              }}
            >
              <div style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${card.color}20 0%, transparent 70%)`,
                right: "-50px",
                bottom: "-50px",
                filter: "blur(30px)",
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: `${card.color}22`,
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {card.num}
                </span>
                <span style={{ fontSize: "2.8rem" }}>{card.icon}</span>
              </div>

              <div>
                <div style={{
                  width: "40px",
                  height: "3px",
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                  borderRadius: "2px",
                  marginBottom: "20px",
                }} />
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}>
                  {card.desc}
                </p>
              </div>

              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, transparent, ${card.color}80, transparent)`,
                borderRadius: "0 0 28px 28px",
              }} />
            </motion.div>
          ))}
        </motion.div>

        {!isMobile && <ProgressDots scrollYProgress={scrollYProgress} count={HORIZONTAL_CARDS.length} />}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
