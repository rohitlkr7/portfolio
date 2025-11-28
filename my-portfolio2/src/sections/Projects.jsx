import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "MERN Notes App",
    description: "Full-stack notes app with auth.",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce",
    description: "E-commerce with cart & checkout.",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Task Planner",
    description: "Task management app using localStorage.",
    tech: [{ icon: <FaReact className="text-cyan-400" />, name: "React" }],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}
    className="relative bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-cyan-400/20">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-200 mb-4">{project.description}</p>
    <div className="flex gap-3 mb-4">
      {project.tech.map((t, i) => <span key={i} className="text-2xl">{t.icon}</span>)}
    </div>
    <div className="flex gap-4">
      <a href={project.github} className="text-cyan-400 text-sm">GitHub</a>
      {project.live && <a href={project.live} className="text-purple-400 text-sm">Live</a>}
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 flex flex-col justify-center">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}
