import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Rohit — MERN Developer
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          I build fast, modern web apps with React, Node.js and MongoDB. Check my skills, projects and contact me below.
        </motion.p>
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 -left-20 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-[#302b63] to-[#1cd8d2] opacity-20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-r from-[#3e397a] to-[#60dbd7] opacity-20 blur-[120px] rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
