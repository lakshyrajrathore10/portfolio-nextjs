"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";

const experiences = [
  {
    id: 1,
    role: "Junior Mobile App Developer",
    company: "Ai Integratorz",
    type: "On-site",
    location: "Indore, Madhya Pradesh",
    period: "Sept. 2025 — Present",
    duration: "Current",
    color: "#6366f1",
    badge: "Current",
    badgeColor: "#10b981",
    logo: "AI",
    logoGradient: "linear-gradient(135deg, #6366f1, #a855f7)",
    highlights: [
      "Developing cross-platform mobile apps using React Native with focus on performance, scalability, and maintainable architecture.",
      "Built and optimized reusable mobile UI components following modern design principles, improving development efficiency.",
      "Integrated RESTful APIs for real-time data fetching, authentication, and dynamic content rendering across multiple modules.",
      "Optimized data fetching logic and reduced redundant API calls, improving API performance by ~35%.",
      "Improved app load time by ~25% by optimizing component rendering and reducing unnecessary re-renders.",
      "Implemented real-time communication with Socket.IO to enable live updates and instant notifications.",
      "Ensured responsive layouts and smooth UX across various Android device sizes.",
    ],
    tech: ["React Native", "Socket.IO", "REST APIs", "Performance Optimization"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Zidio Pvt. Ltd.",
    type: "Remote",
    location: "Remote",
    period: "June 2025 — Aug. 2025",
    duration: "3 Months",
    color: "#06b6d4",
    badge: "Internship",
    badgeColor: "#06b6d4",
    logo: "ZD",
    logoGradient: "linear-gradient(135deg, #06b6d4, #6366f1)",
    highlights: [
      "Worked on frontend tasks related to UI development using React.js within a professional team environment.",
      "Built and updated reusable UI components using React.js, Tailwind CSS, Shadcn UI, and Material UI.",
      "Integrated frontend components with backend REST APIs to fetch and display dynamic data.",
      "Implemented responsive layouts ensuring proper display across mobile and desktop devices.",
    ],
    tech: ["React.js", "Tailwind CSS", "Shadcn UI", "Material UI", "REST APIs"],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ position: "relative" }}
    >
      {/* Timeline dot + line */}
      <div style={{
        position: "absolute",
        left: "clamp(-28px, -6vw, -36px)",
        top: "28px",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        background: exp.color,
        boxShadow: `0 0 16px ${exp.color}88`,
        border: "2.5px solid var(--bg-primary)",
        zIndex: 2,
      }} />

      {/* Card */}
      <div
        className="glass-card"
        style={{
          padding: "clamp(20px, 4vw, 28px) clamp(16px, 4vw, 30px)",
          cursor: "pointer",
          borderColor: expanded ? `${exp.color}33` : "var(--border-subtle)",
          boxShadow: expanded ? `var(--shadow-card), 0 0 30px ${exp.color}18` : "var(--shadow-card)",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
          {/* Logo */}
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: exp.logoGradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "white",
            flexShrink: 0,
            boxShadow: `0 4px 16px ${exp.color}44`,
          }}>
            {exp.logo}
          </div>

          {/* Title block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                margin: 0,
              }}>
                {exp.role}
              </h3>
              {/* Badges */}
              <span style={{
                padding: "3px 10px",
                borderRadius: "50px",
                fontSize: "0.68rem",
                fontWeight: 700,
                fontFamily: "var(--font-body)",
                letterSpacing: "0.08em",
                background: `${exp.badgeColor}22`,
                border: `1px solid ${exp.badgeColor}44`,
                color: exp.badgeColor,
              }}>
                {exp.badge}
              </span>
              {exp.id === 1 && (
                <span style={{
                  padding: "3px 10px",
                  borderRadius: "50px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#10b981",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  Active
                </span>
              )}
            </div>

            <div style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: exp.color,
              marginBottom: "6px",
            }}>
              {exp.company}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}>
                <HiOutlineBriefcase size={13} /> {exp.period} · {exp.duration}
              </span>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}>
                <MdLocationOn size={13} /> {exp.location} ({exp.type})
              </span>
            </div>
          </div>

          {/* Expand toggle */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              flexShrink: 0,
              background: "var(--bg-card)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </motion.div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div style={{ paddingTop: "24px" }}>
            {/* Divider */}
            <div style={{
              height: "1px",
              background: `linear-gradient(90deg, ${exp.color}44, transparent)`,
              marginBottom: "20px",
            }} />

            {/* Bullet highlights */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {exp.highlights.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={expanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                  }}
                >
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: exp.color,
                    marginTop: "8px",
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${exp.color}88`,
                  }} />
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Tech badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: "5px 12px",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  background: `${exp.color}18`,
                  border: `1px solid ${exp.color}33`,
                  color: exp.color,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background orb */}
      <div style={{
        position: "absolute",
        top: "30%",
        right: "-80px",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
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
          style={{ marginBottom: "64px" }}
        >
          <span className="section-label">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional roles where I've shipped real products and grown as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "clamp(28px, 6vw, 48px)" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "clamp(12px, 3vw, 19px)",
            top: "40px",
            bottom: "20px",
            width: "2px",
            background: "linear-gradient(to bottom, #6366f1, #06b6d4, rgba(168,85,247,0.2))",
            borderRadius: "2px",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
