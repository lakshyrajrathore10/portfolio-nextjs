"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

const TECH = {
  React: { icon: <SiReact />, color: "#61dbfb" },
  "Node.js": { icon: <SiNodedotjs />, color: "#68a063" },
  MongoDB: { icon: <SiMongodb />, color: "#4db33d" },
  Express: { icon: <SiExpress />, color: "#94a3b8" },
  JavaScript: { icon: <SiJavascript />, color: "#f7df1e" },
  HTML: { icon: <SiHtml5 />, color: "#e34f26" },
  CSS: { icon: <SiCss3 />, color: "#2965f1" },
};

const projects = [
  {
    id: 1,
    title: "Food Order App",
    subtitle: "Full-Stack MERN Application",
    image: "./food-order-app.png",
    description:
      "A full-stack food ordering web app built with the MERN stack featuring user authentication, menu browsing, cart management, and order placement. Includes an admin panel for managing orders, users, and menu items in real-time.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/lakshyrajrathore10/Food-ordering-Web",
    liveUrl: null,
    featured: true,
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(6,182,212,0.1) 100%)",
    accentColor: "#6366f1",
  },
  {
    id: 2,
    title: "Women Safety App",
    subtitle: "Emergency Alert System",
    image: "./womenSafety.png",
    description:
      "Safety web app sending instant alerts and live location to trusted contacts during emergencies. Built with real-time geolocation tracking and SMS notification integration.",
    tech: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/lakshyrajrathore10/women-safety-web-app",
    liveUrl: null,
    featured: false,
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(249,115,22,0.1) 100%)",
    accentColor: "#a855f7",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: `1px solid ${hovered ? project.accentColor + "44" : "var(--border-subtle)"}`,
        background: "var(--bg-glass)",
        backdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${project.accentColor}22`
          : "var(--shadow-card)",
        transform: hovered ? "translateY(-8px) scale(1.01)" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image with overlay */}
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        {/* Gradient overlay always */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(5,11,26,0.9) 100%)",
        }} />
        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: project.gradient,
          opacity: hovered ? 0.7 : 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: "flex", gap: "12px" }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <FaGithub /> GitHub
              </a>
              <button
                disabled={!project.liveUrl}
                onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  background: project.liveUrl ? `${project.accentColor}cc` : "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${project.liveUrl ? project.accentColor : "rgba(255,255,255,0.15)"}`,
                  color: "white",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  cursor: project.liveUrl ? "none" : "default",
                  opacity: project.liveUrl ? 1 : 0.6,
                }}
              >
                <FaExternalLinkAlt size={12} /> {project.liveUrl ? "Live Demo" : "Coming Soon"}
              </button>
            </motion.div>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            padding: "5px 12px",
            borderRadius: "50px",
            background: "var(--gradient-hero)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "white",
            fontFamily: "var(--font-body)",
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "0.75rem", color: project.accentColor, fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            {project.subtitle}
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
            {project.title}
          </h3>
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, fontFamily: "var(--font-body)", flex: 1, margin: 0 }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "4px" }}>
          {project.tech.map((t) => (
            <div key={t} style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 10px",
              borderRadius: "50px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}>
              <span style={{ color: TECH[t]?.color, fontSize: "0.85rem" }}>{TECH[t]?.icon}</span>
              {t}
            </div>
          ))}
        </div>

        {/* Bottom links */}
        <div style={{ display: "flex", gap: "10px", paddingTop: "6px" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "9px 18px", fontSize: "0.82rem", flex: 1, justifyContent: "center" }}
          >
            <FaGithub /> GitHub
          </a>
          <button
            disabled={!project.liveUrl}
            onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
            className="btn-primary"
            style={{ padding: "9px 18px", fontSize: "0.82rem", flex: 1, justifyContent: "center", opacity: project.liveUrl ? 1 : 0.5, cursor: project.liveUrl ? "none" : "default" }}
          >
            <FaExternalLinkAlt size={11} /> {project.liveUrl ? "Live Demo" : "Soon"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative blob */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
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
          <span className="section-label">Portfolio</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 className="section-title">My Creative Works</h2>
              <p className="section-subtitle">
                Web experiences crafted with a strong focus on design, performance, and interaction.
              </p>
            </div>
            <a
              href="https://github.com/lakshyrajrathore10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ flexShrink: 0 }}
            >
              <FaGithub /> All Projects
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(16px, 4vw, 24px)",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}