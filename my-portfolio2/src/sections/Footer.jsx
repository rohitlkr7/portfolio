import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-20 -left-20 w-[40vw] h-[40vw] bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
        <p className="text-gray-300 mb-4">rohit@example.com</p>
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="#" className="hover:text-cyan-400"><FaGithub /></a>
          <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Rohit Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
