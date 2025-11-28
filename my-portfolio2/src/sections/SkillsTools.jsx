import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
];
const skillLoop = [...skills, ...skills];

const tools = [
  { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Mongo Compass", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
];
const toolsLoop = [...tools, ...tools];

const Card = ({ icon, name, colorClass = "border-cyan-400" }) => (
  <div className={`min-w-[170px] md:min-w-[200px] bg-white/5 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg ${colorClass} border border-opacity-20 hover:border-opacity-100 transition group relative`}>
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-lg font-medium">{name}</p>
    <div className={`absolute inset-0 rounded-xl ${colorClass} blur-md opacity-0 group-hover:opacity-100 transition`}></div>
  </div>
);

export default function SkillsTools() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Skills & Tools</h2>

        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="overflow-hidden mb-6">
          <motion.div className="flex gap-6 py-6" initial={{ x: 0 }} animate={{ x: "-50%" }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }}>
            {skillLoop.map((s, i) => <Card key={i} icon={s.icon} name={s.name} colorClass="border-cyan-400" />)}
          </motion.div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <div className="overflow-hidden">
          <motion.div className="flex gap-6 py-6" initial={{ x: 0 }} animate={{ x: "-50%" }} transition={{ repeat: Infinity, ease: "linear", duration: 22 }}>
            {toolsLoop.map((t, i) => <Card key={i} icon={t.icon} name={t.name} colorClass="border-purple-400" />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
