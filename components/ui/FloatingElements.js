"use client";
import React from "react";
import { motion } from "framer-motion";

// 3D Rotating Geometry (CSS 3D)
export const FloatingGeometry = ({ style, color, size = 60, delay = 0 }) => {
  const faceStyle = (transform) => ({
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    border: `1px solid ${color}`,
    background: `${color}08`,
    backdropFilter: "blur(2px)",
    transform,
  });

  return (
    <motion.div
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 12 + delay * 2, repeat: Infinity, ease: "linear", delay }}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: "preserve-3d",
        pointerEvents: "none",
        ...style,
      }}
    >
      <div style={faceStyle(`translateZ(${size / 2}px)`)} />
      <div style={faceStyle(`translateZ(-${size / 2}px)`)} />
      <div style={faceStyle(`rotateY(90deg) translateZ(${size / 2}px)`)} />
      <div style={faceStyle(`rotateY(-90deg) translateZ(${size / 2}px)`)} />
      <div style={faceStyle(`rotateX(90deg) translateZ(${size / 2}px)`)} />
      <div style={faceStyle(`rotateX(-90deg) translateZ(${size / 2}px)`)} />
    </motion.div>
  );
};

// Floating ring
export const FloatingRing = ({ style, color, size, delay = 0 }) => (
  <motion.div
    animate={{ rotateZ: [0, 360], rotateX: [20, 70, 20] }}
    transition={{ duration: 10 + delay, repeat: Infinity, ease: "linear", delay }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      border: `1.5px solid ${color}`,
      boxShadow: `0 0 20px ${color}44, inset 0 0 20px ${color}11`,
      pointerEvents: "none",
      transformStyle: "preserve-3d",
      ...style,
    }}
  />
);
