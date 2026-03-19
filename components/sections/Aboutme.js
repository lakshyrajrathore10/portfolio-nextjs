"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const education = [
  {
    year: "2022 — 2026",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Acropolis Institute of Technology and Research",
    location: "Indore, MP",
    color: "#6366f1",
  },
  {
    year: "2020 — 2021",
    degree: "Higher Secondary (12th)",
    field: "Science — PCM",
    institution: "Worthington International School",
    location: "Kanwan, MP",
    color: "#06b6d4",
  },
  {
    year: "2019 — 2020",
    degree: "Secondary School (10th)",
    field: "General Education",
    institution: "Worthington International School",
    location: "Kanwan, MP",
    color: "#a855f7",
  },
];

const stats = [
  { value: "3+", label: "Projects Built", color: "#6366f1" },
  { value: "2+", label: "Years of Learning", color: "#06b6d4" },
  { value: "8+", label: "Tech Stack", color: "#a855f7" },
  { value: "∞", label: "Curiosity", color: "#10b981" },
];

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".about-para p", {
      scrollTrigger: {
        trigger: ".about-para",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "-80px",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: "72px" }}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}>
          {/* Left — Story */}
          <div>
            <motion.div
              className="about-para"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p style={{
                fontSize: "1.1rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                marginBottom: "20px",
              }}>
                I'm a <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>final-year Computer Science student</span> who genuinely loves the web — the way it connects people, tells stories, and solves real problems with just code and creativity.
              </p>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                marginBottom: "20px",
              }}>
                I specialize in <span style={{ color: "var(--accent-indigo)", fontWeight: 600 }}>frontend development</span>, turning complex UI designs into clean, fast, pixel-perfect interfaces. Currently expanding into backend with Node.js and MongoDB, while sharpening my <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>DSA skills</span> on LeetCode.
              </p>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}>
                When I'm not coding, I'm exploring new tech, contributing to open source, or thinking about how to make digital experiences feel more <em style={{ color: "var(--text-primary)" }}>human</em>.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                marginTop: "40px",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-heading)",
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
                marginBottom: "28px",
              }}>
                Education Journey
              </div>

              <div style={{ position: "relative", paddingLeft: "48px" }}>
                {/* Vertical line */}
                <div style={{
                  position: "absolute",
                  left: "19px",
                  top: "12px",
                  bottom: "12px",
                  width: "2px",
                  background: "linear-gradient(to bottom, var(--accent-indigo), var(--accent-cyan), rgba(168,85,247,0.3))",
                  borderRadius: "2px",
                }} />

                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ position: "relative", marginBottom: i < education.length - 1 ? "36px" : 0 }}
                  >
                    {/* Dot */}
                    <div style={{
                      position: "absolute",
                      left: "-36px",
                      top: "6px",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: edu.color,
                      boxShadow: `0 0 14px ${edu.color}88`,
                      border: "2.5px solid var(--bg-primary)",
                    }} />

                    {/* Card */}
                    <div
                      className="glass-card"
                      style={{ padding: "20px 22px" }}
                    >
                      <div style={{
                        display: "inline-block",
                        padding: "3px 10px",
                        borderRadius: "50px",
                        background: edu.color + "22",
                        border: `1px solid ${edu.color}44`,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: edu.color,
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.06em",
                        marginBottom: "10px",
                      }}>
                        {edu.year}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}>
                        {edu.degree}
                      </div>
                      <div style={{
                        fontSize: "0.85rem",
                        color: edu.color,
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        marginBottom: "6px",
                      }}>
                        {edu.field}
                      </div>
                      <div style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-body)",
                      }}>
                        {edu.institution} · {edu.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
