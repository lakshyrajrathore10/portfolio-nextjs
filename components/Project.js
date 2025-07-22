"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Order App",
      image: "./food-order-app.png",
      description: "A full-stack food ordering web app built with the MERN stack featuring user authentication, menu browsing, cart, and order placement. Includes an admin panel for managing orders, users, and menu items.",
      githubUrl: "https://github.com/lakshyrajrathore10/Food-ordering-Web"
    },
    {
      id: 2,
      title: "Women Safety App",
      image: "./womenSafety.png",
      description: "Safety web app sending instant alerts and location to trusted contacts during emergencies.",
      githubUrl: "https://github.com/lakshyrajrathore10/women-safety-web-app"
    },
    {
      id: 3,
      title: "TripAdvisor Clone",
      image: "./tripAdvisor.png",
      description: "A TripAdvisor frontend clone showcasing travel destinations, user reviews, and ratings with clean UI",
      githubUrl: "https://github.com/lakshyrajrathore10/trip-advisor"
    }
    // You can add more projects here as needed
  ];

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
        {projects.map((project) => (
          <div key={project.id} className="project-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 flex flex-col h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-base sm:text-lg mb-4">
                {project.description}
              </p>
              <a
                href={project.githubUrl}
                className="px-4 sm:px-6 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-center mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-lg sm:text-xl font-semibold text-neutral-300 mt-8 sm:mt-10 italic tracking-wide">
        & Many more on...
      </p>

      <div className="mt-4 sm:mt-6">
        <a
          href="https://github.com/lakshyrajrathore10"
          className="text-2xl text-gray-300 hover:text-white transition-colors"
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Projects;