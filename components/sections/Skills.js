"use client";
import React, { useEffect, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFire,
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiTailwindcss, SiBootstrap,
  SiPostman, SiVercel, SiShadcnui, SiMui, SiCplusplus,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

/* ─── DATA ──────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "Languages",
    label: "Languages",
    color: "#f97316",
    description: "Core programming foundations",
    skills: [
      { name: "C++",            icon: <SiCplusplus />, color: "#00599c" },
      { name: "JavaScript ES6+",icon: <FaJs />,        color: "#f7df1e", featured: true },
    ],
  },
  {
    id: "Frontend",
    label: "Frontend",
    color: "#6366f1",
    description: "UI engineering & frameworks",
    skills: [
      { name: "HTML5",        icon: <FaHtml5 />,       color: "#e34f26" },
      { name: "CSS3",         icon: <FaCss3Alt />,     color: "#2965f1" },
      { name: "Bootstrap",    icon: <SiBootstrap />,   color: "#7952b3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", featured: true },
      { name: "React.js",     icon: <FaReact />,       color: "#61dbfb", featured: true },
      { name: "Next.js",      icon: <SiNextdotjs />,   color: "#c7d2fe", featured: true },
      { name: "React Native", icon: <FaReact />,       color: "#06b6d4", featured: true },
    ],
  },
  {
    id: "Backend",
    label: "Backend",
    color: "#10b981",
    description: "Server-side & APIs",
    skills: [
      { name: "Node.js",    icon: <FaNodeJs />,  color: "#68a063", featured: true },
      { name: "Express.js", icon: <SiExpress />, color: "#94a3b8" },
      { name: "REST APIs",  icon: <TbApi />,     color: "#a855f7" },
    ],
  },
  {
    id: "Tools",
    label: "Tools & Platforms",
    color: "#06b6d4",
    description: "Dev workflow & deployment",
    skills: [
      { name: "Git",         icon: <FaGitAlt />,    color: "#f05032" },
      { name: "GitHub",      icon: <FaGithub />,    color: "#e2e8f0" },
      { name: "VS Code",     icon: <VscCode />,     color: "#3178c6" },
      { name: "Postman",     icon: <SiPostman />,   color: "#ff6c37" },
      { name: "Vercel",      icon: <SiVercel />,    color: "#e2e8f0" },
      { name: "Shadcn UI",   icon: <SiShadcnui />,  color: "#e2e8f0" },
      { name: "Material UI", icon: <SiMui />,       color: "#007fff" },
      { name: "Firebase",    icon: <FaFire />,      color: "#ffca28" },
    ],
  },
];

// Flat list for the marquee
const ALL_SKILLS = CATEGORIES.flatMap((c) => c.skills);

/* ─── SKILL CHIP ─────────────────────────────────────────── */
const SkillChip = ({ skill, catColor, index, featured }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88, y: 16 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.38, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.06 }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "clamp(6px, 1.5vw, 10px)",
      padding: featured ? "clamp(14px, 3vw, 22px) clamp(12px, 2.5vw, 20px)" : "clamp(12px, 2.5vw, 18px) clamp(10px, 2vw, 16px)",
      borderRadius: "16px",
      background: featured
        ? `linear-gradient(145deg, ${skill.color}18 0%, rgba(255,255,255,0.03) 100%)`
        : "var(--bg-card)",
      border: `1px solid ${featured ? skill.color + "40" : "var(--border-subtle)"}`,
      cursor: "none",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.25s, box-shadow 0.25s",
      boxShadow: featured ? `0 0 24px ${skill.color}18` : "none",
      flex: "0 0 auto",
      minWidth: featured ? "clamp(85px, 20vw, 100px)" : "clamp(75px, 15vw, 86px)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = skill.color + "88";
      e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}30, 0 0 0 1px ${skill.color}20`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = featured ? skill.color + "40" : "var(--border-subtle)";
      e.currentTarget.style.boxShadow = featured ? `0 0 24px ${skill.color}18` : "none";
    }}
  >
    {/* Sheen effect for featured */}
    {featured && (
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${skill.color}08 0%, transparent 60%, ${skill.color}04 100%)`,
        pointerEvents: "none",
      }} />
    )}

    {/* Featured dot */}
    {featured && (
      <div style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: skill.color,
        boxShadow: `0 0 6px ${skill.color}88`,
      }} />
    )}

    {/* Icon */}
    <div style={{
      fontSize: featured ? "clamp(1.5rem, 4vw, 2rem)" : "clamp(1.2rem, 3.5vw, 1.6rem)",
      color: skill.color,
      lineHeight: 1,
      filter: `drop-shadow(0 0 8px ${skill.color}55)`,
      position: "relative",
      zIndex: 1,
    }}>
      {skill.icon}
    </div>

    {/* Name */}
    <span style={{
      fontFamily: "var(--font-body)",
      fontWeight: featured ? 700 : 500,
      fontSize: featured ? "clamp(0.65rem, 1.5vw, 0.78rem)" : "clamp(0.6rem, 1.3vw, 0.72rem)",
      color: featured ? "var(--text-primary)" : "var(--text-secondary)",
      textAlign: "center",
      lineHeight: 1.3,
      position: "relative",
      zIndex: 1,
      whiteSpace: "nowrap",
    }}>
      {skill.name}
    </span>
  </motion.div>
);

/* ─── CATEGORY CARD ───────────────────────────────────────── */
const CategoryCard = ({ cat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="glass-card"
    style={{
      padding: "clamp(24px, 4vw, 32px)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      borderColor: `${cat.color}22`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${cat.color}44`;
      e.currentTarget.style.boxShadow = `var(--shadow-card), 0 0 30px ${cat.color}15`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = `${cat.color}22`;
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
    }}
  >
    {/* Subtle top glow */}
    <div style={{
      position: "absolute",
      top: 0, left: 0, right: 0, height: "3px",
      background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
      opacity: 0.5,
    }} />

    {/* Header */}
    <div style={{
      paddingBottom: "20px",
      marginBottom: "20px",
      borderBottom: `1px solid ${cat.color}22`,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: `linear-gradient(135deg, ${cat.color}33, transparent)`,
            border: `1px solid ${cat.color}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `inset 0 0 12px ${cat.color}22`,
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
          </div>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--text-primary)",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            {cat.label}
          </h3>
        </div>
        <span style={{
          padding: "4px 10px",
          borderRadius: "50px",
          background: `${cat.color}18`,
          border: `1px solid ${cat.color}33`,
          fontSize: "0.68rem",
          fontWeight: 700,
          fontFamily: "var(--font-body)",
          color: cat.color,
        }}>
          {cat.skills.length} skills
        </span>
      </div>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.85rem",
        color: "var(--text-muted)",
        margin: 0,
        lineHeight: 1.5,
      }}>
        {cat.description}
      </p>
    </div>

    {/* Skills chips */}
    <div style={{
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      alignContent: "flex-start",
    }}>
      {cat.skills.map((skill, i) => (
        <SkillChip
          key={skill.name}
          skill={skill}
          catColor={cat.color}
          index={i}
          featured={skill.featured}
        />
      ))}
    </div>
  </motion.div>
);

/* ─── MARQUEE ────────────────────────────────────────────── */
const Marquee = () => {
  const items = [...ALL_SKILLS, ...ALL_SKILLS, ...ALL_SKILLS];

  return (
    <div style={{
      overflow: "hidden",
      position: "relative",
      paddingTop: "12px",
    }}>
      {/* Fade edges */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(90deg, var(--bg-primary) 0%, transparent 15%, transparent 85%, var(--bg-primary) 100%)",
      }} />

      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "14px", width: "max-content" }}
      >
        {items.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "50px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "1rem", color: skill.color, filter: `drop-shadow(0 0 5px ${skill.color}55)` }}>
              {skill.icon}
            </span>
            <span style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
            }}>
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── MAIN SECTION ───────────────────────────────────────── */
export default function Skills() {
  return (
    <section style={{ padding: "clamp(60px, 10vw, 120px) 0 clamp(50px, 10vw, 100px)", position: "relative", overflow: "hidden" }}>
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "15%", left: "-80px", width: "clamp(200px, 30vw, 320px)", height: "clamp(200px, 30vw, 320px)",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "-60px", width: "280px", height: "280px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
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
          <span className="section-label">Tech Arsenal</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: "8px" }}>
                Skills & Technologies
              </h2>
              <p className="section-subtitle">
                A curated stack I use to build scalable, high-quality products — from pixel to server.
              </p>
            </div>
            {/* Totals badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {ALL_SKILLS.length} technologies
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", 
          gap: "clamp(24px, 4vw, 32px)", 
          marginBottom: "clamp(48px, 8vw, 80px)" 
        }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{
            borderRadius: "20px",
            border: "1px solid var(--border-subtle)",
            padding: "24px 0",
            background: "var(--bg-glass)",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
          }}>
            <p style={{
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "16px",
            }}>
              Full Stack · All Technologies
            </p>
            <Marquee />
          </div>
        </motion.div>
      </div>
    </section>
  );
}