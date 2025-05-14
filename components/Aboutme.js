"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutMe = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animation for About Me Section
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-text', // Element to trigger animation
        start: 'top 80%', // When the element reaches 80% of the screen height
        end: 'top 50%', // End the animation when it hits 50% of the screen
        scrub: 2, // Smooth scrolling effect, with slower scrub effect (higher number = slower)
        markers: false, // Disable visual markers
      },
      opacity: 0,
      y: 50, // Start from 50px below
      duration: 3, // Increased duration for slower animation
      ease: 'power2.out', // Smooth easing function
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white flex flex-col items-center py-16 px-4">

      {/* Tube light and heading with gradient glow */}
      <div className="relative mb-16 flex flex-col items-center">
        <div className="w-[300px] md:w-[600px] h-1 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.7)]"></div>

        <div className="relative mt-10">
          <div className="absolute -inset-2 rounded-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-400 via-cyan-500 to-teal-400 opacity-50 blur-2xl z-0"></div>
          <h2 className="relative z-10 text-3xl md:text-4xl font-semibold text-center border-2 px-6 py-3 rounded-2xl bg-white/5">
            About Me
          </h2>
        </div>
      </div>

      {/* About Text with ScrollTrigger Animation */}
      <div className="max-w-3xl w-full text-center mb-20">
        <p className="about-text text-lg md:text-xl text-gray-200 leading-relaxed">
        I am a third-year Computer Science student with a strong passion for frontend development. I enjoy turning complex UI designs into responsive, user-friendly web interfaces. Currently, I am learning backend development and sharpening my skills in Data Structures and Algorithms (DSA) to become a well-rounded full-stack developer.
        </p>
      </div>

      {/* Education cards (same as before) */}
      <div className="w-full max-w-xl space-y-8">
        {[ 
          {
            year: "2022 - 2026",
            title: "BACHELOR OF TECHNOLOGY",
            desc: "ACROPOLIS INSTITUTE OF TECHNOLOGY AND RESEARCH, INDORE",
          },
          {
            year: "2020 - 2021",
            title: "HIGHER SECONDARY",
            desc: "WORTHINGTON INTERNATIONAL SCHOOL, KANWAN",
          },
          {
            year: "2019 - 2020",
            title: "SECONDARY SCHOOL",
            desc: "WORTHINGTON INTERNATIONAL SCHOOL, KANWAN",
          }
        ].map((edu, idx) => (
          <div key={idx} className="border border-white/10 hover:border-sky-500 hover:shadow-sky-500 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform rounded-xl p-6 bg-white/5">
            <span className="text-teal-400 text-sm font-bold">{edu.year}</span>
            <h3 className="text-xl font-semibold mt-2">{edu.title}</h3>
            <p className="text-gray-300 mt-1">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
