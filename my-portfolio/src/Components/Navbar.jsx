import React, { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import RohitLOGO from "../assets/RohitLOGO.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  // Detect Home section visibility
  useEffect(() => {
    const HomeSection = document.querySelector("#Home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (HomeSection) observer.observe(HomeSection);

    return () => {
      if (HomeSection) observer.unobserve(HomeSection);
    };
  }, []);

  // Scroll behavior (hide/show navbar)
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // Scrolling DOWN → HIDE navbar
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        // Scrolling UP → SHOW navbar
        setVisible(true);

        // Clear old timer
        if (timerId.current) clearTimeout(timerId.current);

        // Hide again after 3 seconds
        timerId.current = setTimeout(() => {
          setVisible(false);
        },9000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 
        transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={RohitLOGO} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Rohit
          </div>
        </div>

        {/* Center Menu Button */}
        <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>

        {/* Reach-Out Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
