"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCounter } from "../../hooks/useCounter";

const StatCard = ({ value, suffix = "", label, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCounter(value, 1800, inView);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
      style={{
        padding: "16px 24px",
        background: "var(--bg-glass)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "16px",
        textAlign: "center",
        flex: "1",
        minWidth: "90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)",
      }} />
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(1.4rem, 3vw, 2rem)",
        fontWeight: 800,
        background: "linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-body)", marginTop: "4px", letterSpacing: "0.04em" }}>
        {label}
      </div>
    </motion.div>
  );
};

export default StatCard;
