import React from 'react';
import Header from '@/components/layout/Header';
import Main from '@/components/sections/Main';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Aboutme from '@/components/sections/Aboutme';
import ExtraCurricular from '@/components/sections/ExtraCurricular';
import Contact from '@/components/sections/Contactme';
import Project from '@/components/sections/Project';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import CustomCursor from '@/components/ui/CustomCursor';
import ClientScrollEffects from '@/components/ClientScrollEffects';
import HorizontalScrollSection from '@/components/sections/HorizontalScrollSection';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

/* ── Wave Divider ──────────────────────────────────────── */
const WaveDivider = ({ flip = false }) => (
  <div style={{ lineHeight: 0, transform: flip ? "scaleY(-1)" : "none", marginTop: -1 }}>
    <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
      <path d="M0,0 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="rgba(99,102,241,0.04)" />
    </svg>
  </div>
);

export default function Page() {
  return (
    <ThemeProvider>
      <CustomCursor />
      {/* Scroll progress + orbs (client components) */}
      <ClientScrollEffects />

      <div style={{ position: 'relative' }}>
        <Header />

        {/* HERO */}
        <section id="main">
          <Main />
        </section>

        <WaveDivider />

        {/* HORIZONTAL SCROLL — "What I Do" expertise cards */}
        <HorizontalScrollSection />

        <AnimatedDivider label="Experience" />

        {/* EXPERIENCE */}
        <section id="experience">
          <Experience />
        </section>

        <AnimatedDivider label="Skills" />

        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>

        <WaveDivider flip />
        <AnimatedDivider label="Projects" />

        {/* PROJECTS */}
        <section id="projects">
          <Project />
        </section>

        <AnimatedDivider label="About" />

        {/* ABOUT */}
        <section id="about-me">
          <Aboutme />
        </section>

        <WaveDivider />
        <AnimatedDivider label="Achievements" />

        {/* EXTRA CURRICULAR */}
        <section id="extra-curricular">
          <ExtraCurricular />
        </section>

        <AnimatedDivider label="Contact" />

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
