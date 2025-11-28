import React from "react";
import { motion } from "framer-motion";
import rp from "../assets/rohit.jpg"; // optional: add profile image in src/assets

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-5xl w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
            {/* If you have image put src={rp} */}
            <img src={rp} alt="Rohit" className="w-full h-full object-cover" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]">
              About Me
            </h2>
            <p className="text-gray-300 max-w-xl">
              I’m a MERN Stack developer building scalable and accessible applications. I enjoy designing clean UI with performant code.
            </p>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] text-black font-semibold">
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
