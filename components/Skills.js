import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl drop-shadow-lg" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl drop-shadow-lg" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl drop-shadow-lg" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl drop-shadow-lg" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-5xl drop-shadow-lg" /> },
    // { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl drop-shadow-lg" /> },
    // { name: "Express", icon: <SiExpress className="text-gray-800 text-5xl drop-shadow-lg" /> },
    // { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl drop-shadow-lg" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400 text-5xl drop-shadow-lg" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl drop-shadow-lg" /> },
    { name: "Github", icon: <FaGithub className="text-black text-5xl drop-shadow-lg" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-5xl drop-shadow-lg" /> },
    // { name: "GSAP", icon: <p className="text-green-400 text-3xl font-bold drop-shadow-lg">GSAP</p> },
  ];

  return (
    <div className="w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center relative overflow-hidden border-t border-b border-gray-700">
      {/* Section Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Tools & Technologies I Work With</h1>
        <p className="text-gray-400 text-sm">These are the core technologies I use in most of my projects</p>
      </div>

      {/* Scroll Area */}
      <div className="w-full py-5 mt-14 overflow-hidden relative max-w-[95%] mx-auto">
        {/* Gradient overlay for fade effect on edges */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#0a192f] to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0a192f] to-transparent z-10" />

        {/* Scrollable skills */}
        <div className="flex space-x-8 w-max animate-scrollX">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="text-black px-6 py-3 rounded-lg shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center bg-white/40 backdrop-blur-lg border border-gray-800"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
