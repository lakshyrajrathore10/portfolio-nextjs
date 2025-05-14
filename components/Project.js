'use client';
import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-20 px-6 flex flex-col justify-center items-center">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">My Creative Works</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A showcase of web experiences I've crafted with a strong focus on design, responsiveness, and interaction.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 projects-grid">
        
        {/* Project Card 1 */}
        <div className="project-card relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 1"
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-semibold mb-2">Project One</h3>
            <p className="text-lg mb-4">
              A creative design project that focuses on UI/UX principles and modern tech.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 2"
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-semibold mb-2">Project Two</h3>
            <p className="text-lg mb-4">
              Responsive frontend clone of a popular platform using React and Tailwind CSS.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 3"
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-semibold mb-2">Project Three</h3>
            <p className="text-lg mb-4">
              A feature-rich web app focusing on accessibility, performance, and design.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
