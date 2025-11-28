import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SkillsTools from "./sections/SkillsTools";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsTools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
