'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Name/Brand */}
        <h2 className="text-2xl md:text-3xl font-bold drop-shadow-md">Lakshyraj Singh Rathore</h2>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
            <FaLinkedin />
          </a>
          
          <a href="mailto:youremail@example.com" className="hover:text-cyan-400 transition duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Lakshyraj. Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
