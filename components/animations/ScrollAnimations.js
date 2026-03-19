"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export const RevealSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const variants = {
    up:    { hidden: { opacity: 0, y: 60, rotateX: 12, scale: 0.96 }, visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 } },
    left:  { hidden: { opacity: 0, x: -60, rotateY: -12 },            visible: { opacity: 1, x: 0, rotateY: 0 } },
    right: { hidden: { opacity: 0, x: 60, rotateY: 12 },              visible: { opacity: 1, x: 0, rotateY: 0 } },
    zoom:  { hidden: { opacity: 0, scale: 0.8, rotateX: 8 },          visible: { opacity: 1, scale: 1, rotateX: 0 } },
  };

  const { hidden, visible } = variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden, visible }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxLayer = ({ children, speed = 0.3, style = {} }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return (
    <motion.div ref={ref} style={{ position: "relative", ...style, y }}>
      {children}
    </motion.div>
  );
};

export const BlurRevealText = ({ text, className = "", style = {} }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} style={{ display: "inline", ...style }} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
