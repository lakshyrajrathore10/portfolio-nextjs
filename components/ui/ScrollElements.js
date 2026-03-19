"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #6366f1, #06b6d4, #a855f7, #f97316)",
        zIndex: 9999,
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 10px rgba(99,102,241,0.5)",
      }}
    />
  );
};

export const ScrollCounter = () => {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setPercent(Math.round(v * 100)));
  }, [scrollYProgress]);

  if (percent === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: percent > 2 ? 1 : 0, scale: percent > 2 ? 1 : 0.8 }}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "28px",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "var(--bg-glass)",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--border-accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <svg style={{ position: "absolute", inset: 0, width: "52px", height: "52px", transform: "rotate(-90deg)" }}>
        <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="2" />
        <circle
          cx="26" cy="26" r="22"
          fill="none"
          stroke="url(#scrollGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 22}`}
          strokeDashoffset={`${2 * Math.PI * 22 * (1 - percent / 100)}`}
          style={{ transition: "stroke-dashoffset 0.1s ease" }}
        />
        <defs>
          <linearGradient id="scrollGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{
        fontFamily: "var(--font-heading)",
        fontSize: "0.65rem",
        fontWeight: 700,
        color: "var(--text-primary)",
        position: "relative",
        zIndex: 1,
      }}>
        {percent}%
      </span>
    </motion.div>
  );
};

export const ScrollOrbs = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: "20%",
          left: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
          y: y1,
          rotate: rotate1,
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          bottom: "10%",
          right: "-200px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
          y: y2,
          rotate: rotate2,
        }}
      />
    </>
  );
};
