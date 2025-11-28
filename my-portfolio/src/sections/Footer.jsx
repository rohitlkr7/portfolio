import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PartBackgrounds from "../Components/PartBackgrounds";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 md:px-12 py-12 flex flex-col items-center justify-center overflow-hidden">
       <PartBackgrounds/>
      {/* Blob Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-linear-to-r from-cyan-600 to-purple-600 opacity-20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-linear-to-r from-purple-500 to-cyan-400 opacity-20 blur-[100px] rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">Contact Me</h3>
        <p className="text-gray-300">rohitlkr7@gmail.com</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2 text-2xl">
          <a
            href="https://github.com/rohitlkr7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/-rohitkumar-811211-7549r/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 mt-4 text-sm">
          &copy; {new Date().getFullYear()} Rohit Kumar. All rights reserved.
        </p>
      </div>

      {/* Glass Glow Border */}
      <div className="absolute inset-0 rounded-xl border border-cyan-400/20 blur-md opacity-10"></div>
    </footer>
  );
};

export default Footer;
