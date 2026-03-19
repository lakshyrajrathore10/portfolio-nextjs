"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ID = "service_qf1tw7q";
const TEMPLATE_ID = "template_jqraqgj";
const PUBLIC_KEY = "3EwfiO-P9cu7zAAs9";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/lakshyrajrathore10", label: "GitHub", color: "#e2e8f0" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lakshyraj-singh-rathore-272361265", label: "LinkedIn", color: "#0ea5e9" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/lakshyraj10/", label: "LeetCode", color: "#f97316" },
  { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/user/lakshyrajsingh10/", label: "GeeksforGeeks", color: "#10b981" },
];

const FloatingInput = ({ id, label, type = "text", value, onChange, required }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: "6px" }}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        style={{
          width: "100%",
          padding: "22px 16px 8px",
          background: "var(--bg-card)",
          border: `1.5px solid ${focused ? "var(--accent-indigo)" : "var(--border-subtle)"}`,
          borderRadius: "12px",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: focused ? "0 0 0 3px rgba(99,102,241,0.15)" : "none",
        }}
      />
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: "16px",
          top: isActive ? "8px" : "50%",
          transform: isActive ? "none" : "translateY(-50%)",
          fontSize: isActive ? "0.7rem" : "0.9rem",
          fontWeight: isActive ? "600" : "400",
          color: focused ? "var(--accent-indigo)" : "var(--text-muted)",
          fontFamily: "var(--font-body)",
          letterSpacing: isActive ? "0.06em" : "0",
          textTransform: isActive ? "uppercase" : "none",
          transition: "all 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focusedMsg, setFocusedMsg] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background orb */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "-80px",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
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
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        {/* Two column card */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "0",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-card)",
        }}>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              padding: "48px 40px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.06) 100%)",
              borderRight: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "12px",
              }}>
                Let's build something great.
              </h3>
              <p style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}>
                I'm currently available for freelance work, internships, and full-time roles. 
                Reach out — I typically respond within 24 hours.
              </p>
            </div>

            {/* Email */}
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "var(--font-body)", marginBottom: "10px" }}>
                Direct Email
              </div>
              <a
                href="mailto:lakshyrajsingh10@example.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-indigo)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              >
                <FaEnvelope style={{ color: "var(--accent-indigo)" }} />
                lakshyrajsingh10@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "var(--font-body)", marginBottom: "16px" }}>
                Social Profiles
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}22`;
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span style={{ color, fontSize: "1.1rem" }}><Icon /></span>
                    {label}
                    <HiArrowRight style={{ marginLeft: "auto", opacity: 0.5 }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              padding: "48px 40px",
              background: "var(--bg-glass)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "28px",
            }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FloatingInput id="name" label="Your Name" value={formData.name} onChange={handleChange} required />
              <FloatingInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required />
              <FloatingInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} required />

              {/* Textarea */}
              <div style={{ position: "relative" }}>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedMsg(true)}
                  onBlur={() => setFocusedMsg(false)}
                  required
                  placeholder=" "
                  style={{
                    width: "100%",
                    padding: "22px 16px 8px",
                    background: "var(--bg-card)",
                    border: `1.5px solid ${focusedMsg ? "var(--accent-indigo)" : "var(--border-subtle)"}`,
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: focusedMsg ? "0 0 0 3px rgba(99,102,241,0.15)" : "none",
                  }}
                />
                <label htmlFor="message" style={{
                  position: "absolute",
                  left: "16px",
                  top: (focusedMsg || formData.message.length > 0) ? "8px" : "18px",
                  fontSize: (focusedMsg || formData.message.length > 0) ? "0.7rem" : "0.9rem",
                  fontWeight: (focusedMsg || formData.message.length > 0) ? "600" : "400",
                  color: focusedMsg ? "var(--accent-indigo)" : "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: (focusedMsg || formData.message.length > 0) ? "0.06em" : "0",
                  textTransform: (focusedMsg || formData.message.length > 0) ? "uppercase" : "none",
                  transition: "all 0.2s ease",
                  pointerEvents: "none",
                }}>
                  Your Message
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{ marginTop: "4px", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin-slow 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiArrowRight />
                  </>
                )}
              </button>
            </form>

            {/* Status messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: "16px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10b981",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: "16px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#ef4444",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  ✗ Failed to send. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
