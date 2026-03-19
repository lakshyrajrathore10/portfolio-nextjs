"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/lakshyrajrathore10", label: "GitHub", color: "#e2e8f0" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lakshyraj-singh-rathore-272361265", label: "LinkedIn", color: "#0ea5e9" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/lakshyraj10/", label: "LeetCode", color: "#f97316" },
  { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/user/lakshyrajsingh10/", label: "GeeksforGeeks", color: "#10b981" },
  { icon: FaEnvelope, href: "mailto:lakshyrajsingh10@gmail.com", label: "Email", color: "#6366f1" },
];

export default function Footer() {
  return (
    <footer style={{
      padding: "48px 0 36px",
      borderTop: "1px solid var(--border-subtle)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top gradient line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60%",
        height: "1px",
        background: "var(--gradient-hero)",
        opacity: 0.5,
      }} />

      <div className="section-container">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "var(--gradient-hero)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
            }}>
              <span style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.2rem",
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                L
              </span>
            </div>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              marginBottom: "4px",
            }}>
              Lakshyraj Singh Rathore
            </div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}>
              Frontend Developer · Building experiences that matter
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: "10px" }}
          >
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 0 16px ${color}33`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <Icon />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} Lakshyraj Singh Rathore · Crafted with passion &amp; precision
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
