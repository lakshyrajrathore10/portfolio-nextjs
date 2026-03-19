"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AnimatedDivider = ({ label = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "0 clamp(24px, 5vw, 80px)",
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4))",
          transformOrigin: "left",
        }}
      />
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </motion.span>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg, rgba(6,182,212,0.4), transparent)",
          transformOrigin: "right",
        }}
      />
    </div>
  );
};
