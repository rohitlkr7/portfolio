import { motion } from "framer-motion";
import rp from "../assets/rohit.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 md:px-10"
    >
      {/* 🌈 Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-20 
          w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw]
          max-w-[380px] max-h-[380px]
          rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-25 blur-[90px] sm:blur-[130px] animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0 
          w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw]
          max-w-[380px] max-h-[380px]
          rounded-full bg-gradient-to-r from-[#3e397a] via-[#40c97e] to-[#60dbd7]
          opacity-20 blur-[100px] sm:blur-[150px] animate-pulse delay-500"
        ></div>
      </div>

      {/* 🌟 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl w-full"
      >
        <div
          className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl 
          rounded-3xl p-6 sm:p-10 md:p-16 
          flex flex-col md:flex-row items-center gap-8 sm:gap-10"
        >
          {/* 🎭 Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] blur-xl opacity-40"></div>

            <div className="
              relative 
              w-32 h-32 
              sm:w-40 sm:h-40 
              md:w-56 md:h-56 
              rounded-full overflow-hidden 
              border-2 border-white/20 
              shadow-lg shadow-[#1cd8d2]/50
            ">
              <img
                src={rp}
                alt="Rohit Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 📝 About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Rohit Kumar</span> —
              a passionate MERN Stack Developer focused on building clean,
              modern, and high-performance web applications.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              I love crafting beautiful UI with React, Tailwind CSS, and creating
              powerful backends using Node.js and MongoDB. I aim to deliver
              seamless user experience with creativity and performance.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl 
              bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]
              text-black font-semibold shadow-lg shadow-[#1cd8d2]/40"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
