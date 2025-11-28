import Navbar from "./Components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Project from "./sections/Project.jsx";
import Contact from "./sections/Contact.jsx";
import CustomCursor from "./Components/CustomCursor.jsx";
import { useState } from "react";
import IntroAnimation from "./Components/IntroAnimation.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const [introDone, setintroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setintroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />

          <Navbar />
          <Home />
          <About/>
          <Skills/>
          <Project/>
          <Contact/>
          <Footer/>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes> */}
        </div>
      )}
    </>
  );
}
