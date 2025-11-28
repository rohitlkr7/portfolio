import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "MERN Notes App",
    description: "A full-stack MERN application for taking notes with authentication.",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
    github: "https://github.com/yourusername/mern-notes-app",
    live: "https://mern-notes-app.live",
  },
  {
    title: "E-commerce Website",
    description: "Responsive e-commerce website with cart, checkout and payment integration.",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" },
    ],
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://ecommerce-app.live",
  },
  {
    title: "Task Planner",
    description: "A web app to manage and organize daily tasks with localStorage persistence.",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" },
    ],
    github: "https://github.com/yourusername/task-planner",
    live: "https://task-planner.live",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between shadow-lg border border-cyan-400/30 hover:border-cyan-400 hover:shadow-cyan-400/50 group mb-8"
  >
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-200 mb-4">{project.description}</p>
    <div className="flex gap-2 mb-4">
      {project.tech.map((tech, i) => (
        <div key={i} className="relative group">
          {tech.icon}
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
    <div className="flex gap-4 mt-auto">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-cyan-400 hover:underline"
      >
        GitHub
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-purple-400 hover:underline"
        >
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

const ProjectSection = () => (
  <section className="relative min-h-screen bg-black text-white px-6 md:px-12 overflow-hidden flex flex-col justify-start py-24">
    {/* Blob Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 -left-20 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-cyan-600 to-purple-600 opacity-30 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-30 blur-[100px] rounded-full animate-pulse delay-500"></div>
    </div>

    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
      My Projects or Work 💻
    </h2>

    {/* Vertical Cards */}
    <div className="flex flex-col z-10 relative">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectSection;
