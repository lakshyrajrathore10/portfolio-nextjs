"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdMilitaryTech } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { GiMedal } from "react-icons/gi";

const achievements = [
  {
    id: 1,
    icon: SiLeetcode,
    iconColor: "#f97316",
    gradientFrom: "#f97316",
    gradientTo: "#ef4444",
    badge: "Consistency",
    badgeColor: "#f97316",
    title: "100-Day Streak Badge",
    org: "LeetCode",
    description:
      "Earned the prestigious 100-day streak badge on LeetCode, demonstrating consistent problem-solving discipline and dedication to competitive programming.",
    tag: "Competitive Programming",
  },
  {
    id: 2,
    icon: MdMilitaryTech,
    iconColor: "#6366f1",
    gradientFrom: "#6366f1",
    gradientTo: "#a855f7",
    badge: "Shortlisted × 2",
    badgeColor: "#a855f7",
    title: "Services Selection Board (SSB) Interview",
    org: "Bhopal & Allahabad Board",
    description:
      "Shortlisted twice for the SSB interview — one of India's most rigorous officer selection processes — at Bhopal and Allahabad Boards, demonstrating leadership potential and mental fortitude.",
    tag: "Defence Selection",
  },
  {
    id: 3,
    icon: GiMedal,
    iconColor: "#10b981",
    gradientFrom: "#10b981",
    gradientTo: "#06b6d4",
    badge: "Cleared",
    badgeColor: "#10b981",
    title: "Army Technical Common Entrance Exam (CEE)",
    org: "Indian Army",
    description:
      "Successfully cleared the Army Technical CEE, qualifying for technical entry into the Indian Army and proving strong fundamentals in science and engineering.",
    tag: "National Examination",
  },
  {
    id: 4,
    icon: GiMedal,
    iconColor: "#06b6d4",
    gradientFrom: "#06b6d4",
    gradientTo: "#6366f1",
    badge: "Cleared",
    badgeColor: "#06b6d4",
    title: "Army General Duty Common Entrance Exam (CEE)",
    org: "Indian Army",
    description:
      "Cleared the Army General Duty CEE, reflecting physical fitness, aptitude, and overall readiness for national service alongside pursuing engineering.",
    tag: "National Examination",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ExtraCurricular() {
  return (
    <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-100px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <span className="section-label">
            <HiOutlineTrophy size={12} />
            Beyond the Code
          </span>
          <h2 className="section-title">Extra-Curricular</h2>
          <p className="section-subtitle">
            Achievements and milestones beyond academics that reflect leadership, discipline, and perseverance.
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: "28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    borderColor: `${item.gradientFrom}22`,
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `var(--shadow-card), 0 0 36px ${item.gradientFrom}22`;
                    e.currentTarget.style.borderColor = `${item.gradientFrom}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-card)";
                    e.currentTarget.style.borderColor = `${item.gradientFrom}22`;
                  }}
                >
                  {/* Subtle top gradient bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})`,
                      borderRadius: "12px 12px 0 0",
                    }}
                  />

                  {/* Icon + Badge row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.35rem",
                        color: "white",
                        boxShadow: `0 4px 16px ${item.gradientFrom}44`,
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "50px",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.06em",
                        background: `${item.badgeColor}18`,
                        border: `1px solid ${item.badgeColor}44`,
                        color: item.badgeColor,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        fontFamily: "var(--font-body)",
                        color: item.iconColor,
                      }}
                    >
                      {item.org}
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)",
                        margin: "8px 0 0",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Tag */}
                  <div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 12px",
                        borderRadius: "50px",
                        fontSize: "0.73rem",
                        fontWeight: 600,
                        fontFamily: "var(--font-body)",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: item.gradientFrom,
                          display: "inline-block",
                        }}
                      />
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
