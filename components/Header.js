'use client';
import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fixed scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <header className="hidden sm:flex items-center justify-between mx-4 md:mx-20 lg:mx-60 mt-5 bg-white/50 backdrop-blur-xl text-black h-13 rounded-full px-4 md:px-8 fixed top-0 left-0 right-0 z-40 border border-gray-200 shadow-sm">
        <a onClick={() => scrollToSection('main')} className="text-lg font-medium cursor-pointer">LSR</a>
        <div className="flex gap-4 md:gap-6">
          <a onClick={() => scrollToSection('main')} className="cursor-pointer hover:text-gray-600">Home</a>
          <a onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-gray-600">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-gray-600">Projects</a>
          <a onClick={() => scrollToSection('about-me')} className="cursor-pointer hover:text-gray-600">About</a>
          <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-gray-600">Contact</a>
        </div>
        <div className="text-xl"> <FiSun size={24} /></div>
      </header>

      {/* Mobile Navbar */}
      <header className="sm:hidden flex items-center justify-between mx-4 mt-5 bg-white/40 backdrop-blur-lg text-gray-800 h-14 rounded-full px-4 fixed top-0 left-0 right-0 z-40 border border-gray-200 shadow-sm">
        <a onClick={() => scrollToSection('main')} className="text-lg font-medium cursor-pointer">LSR</a>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-0 right-0 w-3/4 h-full bg-white/30 backdrop-blur-xl rounded-bl-2xl p-6 shadow-xl border border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 text-gray-800 text-2xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            
            <div className="flex flex-col items-start gap-5 text-black mt-12">
              <a onClick={() => { scrollToSection('main'); setIsOpen(false); }} className="cursor-pointer hover:text-gray-600 w-full py-1.5">Home</a>
              <a onClick={() => { scrollToSection('skills'); setIsOpen(false); }} className="cursor-pointer hover:text-gray-600 w-full py-1.5">Skills</a>
              <a onClick={() => { scrollToSection('projects'); setIsOpen(false); }} className="cursor-pointer hover:text-gray-600 w-full py-1.5">Projects</a>
              <a onClick={() => { scrollToSection('about-me'); setIsOpen(false); }} className="cursor-pointer hover:text-gray-600 w-full py-1.5">About</a>
              <a onClick={() => { scrollToSection('contact'); setIsOpen(false); }} className="cursor-pointer hover:text-gray-600 w-full py-1.5">Contact</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
