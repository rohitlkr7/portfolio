import Navbar from "./Components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Project from "./sections/Project.jsx";
import Contact from "./sections/Contact.jsx";
import CustomCursor from "./Components/CustomCursor.jsx";


export default function App() {
  return (
    <>
      <div>
        {/* <PartBackgrounds/> */}
        <CustomCursor/>

        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>  
        <Contact/>
      </div>
    </>
  );
}
