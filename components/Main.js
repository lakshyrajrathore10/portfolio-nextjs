"use client";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import gsap from "gsap";

const Main = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".hero-text", {
      opacity: 0,
      x: -100,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(".social-icons a", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(".profile-image", {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(".buttons button, .buttons a", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div id="main" className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-20">
        {/* Left Section */}
        <div className="w-full m-10 md:w-1/2 order-1 md:order-none">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight mb-6 hero-text"
          >
            Hello, <br />
            I'm{" "}
            <span className="text-emerald-400">Lakshyraj Singh Rathore</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Crafting beautiful, responsive web experiences with modern
            technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mb-8 social-icons">
            <a
              href="#"
              className="text-2xl text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-300 hover:text-orange-400 transition-colors"
            >
              <SiLeetcode />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-300 hover:text-green-500 transition-colors"
            >
              <SiGeeksforgeeks />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 buttons">
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-emerald-400 text-white hover:bg-emerald-400 hover:bg-opacity-10 transition-colors">
              <MdContactMail /> Contact me
            </button>
            {/* Get Resume button without download functionality */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              style={{ visibility: "visible", opacity: 1 }} // Ensuring visibility
            >
              <IoMdDownload /> Get Resume
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center order-0 md:order-none mb-8 md:mb-0 mt-13 md:mt-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl shadow-xl shadow-gray-900/50 border-2 border-gray-800 profile-image">
            <img
              src="./image.png"
              alt="Lakshyraj Singh Rathore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
