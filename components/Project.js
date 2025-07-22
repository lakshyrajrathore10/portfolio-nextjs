"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-12 md:py-20 px-4 sm:px-6 flex flex-col justify-center items-center">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
          My Creative Works
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          A showcase of web experiences I've crafted with a strong focus on
          design, responsiveness, and interaction.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl px-4">
        {/* Project Card 1 */}
        <div className="project-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 flex flex-col h-full">
          <img
            src="./food-order-app.png"
            alt="Project 1"
            className="w-full h-48 sm:h-52 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <p className="text-base sm:text-lg mb-4">
              A full-stack food ordering web app built with the MERN stack featuring user authentication, menu browsing, cart, and order placement. Includes an admin panel for managing orders, users, and menu items.
            </p>
            <a
              href="https://github.com/lakshyrajrathore10/Food-ordering-Web"
              className="px-4 sm:px-6 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-center mt-auto"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 flex flex-col h-full">
          <img
            src="./womenSafety.png"
            alt="Project 2"
            className="w-full h-48 sm:h-52 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <p className="text-base sm:text-lg mb-4">
              Safety web app sending instant alerts and location to trusted
              contacts during emergencies.
            </p>
            <a
              href="https://github.com/maity-moumita/Alert-Angel"
              className="px-4 sm:px-6 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-center mt-auto"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 flex flex-col h-full">
          <img
            src="./tripAdvisor.png"
            alt="Project 3"
            className="w-full h-48 sm:h-52 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <p className="text-base sm:text-lg mb-4">
              A TripAdvisor frontend clone showcasing travel destinations, user
              reviews, and ratings with clean UI
            </p>
            <a
              href="https://github.com/lakshyrajrathore10/trip-advisor"
              className="px-4 sm:px-6 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-center mt-auto"
            >
              GitHub
            </a>
          </div>
        </div>
        
        {/* project cart 4 */}

        

      </div>

      <p className="text-center text-lg sm:text-xl font-semibold text-neutral-300 mt-8 sm:mt-10 italic tracking-wide">
        & Many more on...
      </p>

      <div className="mt-4 sm:mt-6">
        <a
          href="https://github.com/lakshyrajrathore10"
          className="text-2xl text-gray-300 hover:text-white transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Projects;