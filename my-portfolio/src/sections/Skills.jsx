import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import PartBackgrounds from "../Components/PartBackgrounds";

// ================== SKILLS ===================
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
];

// Loop
const skillLoop = [...skills, ...skills];

// ================== TOOLS ===================
const tools = [
  { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Mongo Compass", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
];


const toolsLoop = [...tools, ...tools];

// ================== COMPONENT ===================
const SkillsToolsSection = () => {
  return (
    <section className="h-screen relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
       <PartBackgrounds/>
      {/* =================== BLOB ANIMATION BACKGROUND =================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-20 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw]
          bg-gradient-to-r from-cyan-600 to-purple-600 opacity-30 blur-[100px]
          rounded-full animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw]
          bg-gradient-to-r from-purple-500 to-cyan-400 opacity-30 blur-[100px]
          rounded-full animate-pulse delay-500"
        ></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          My Skills & Tools 🚀
        </h2>

        {/* ===================== SKILLS ===================== */}
        <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 py-5"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          >
            {skillLoop.map((skill, i) => (
              <div
                key={i}
                className="min-w-[180px] bg-white/10 backdrop-blur-md
                rounded-xl px-6 py-4 
                border border-cyan-400/30 
                hover:border-cyan-400 hover:shadow-cyan-400/40 
                shadow-lg transition group relative"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg">{skill.name}</p>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border border-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===================== TOOLS ===================== */}
        <h3 className="text-2xl font-semibold mt-4 mb-2">Tools I Use</h3>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 py-5"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          >
            {toolsLoop.map((tool, i) => (
              <div
                key={i}
                className="min-w-[180px] bg-white/10 backdrop-blur-md
                rounded-xl px-5 py-2
                border border-purple-400/30 
                hover:border-purple-400 hover:shadow-purple-400/40 
                shadow-lg transition group relative"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <p className="text-lg">{tool.name}</p>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border border-purple-400/40 blur-md opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsSection;
