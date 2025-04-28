import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiNetlify, SiReactrouter, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-pink-500" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
  ];
  return (
    <section className="mb-16 pb-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">My Skill</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
