import React, { useState } from "react";
import { scrollWithOffset } from "../utils/scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Rohit Kumar</div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollWithOffset(l.id)}
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border border-white/10"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-md px-6 pb-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  scrollWithOffset(l.id);
                  setOpen(false);
                }}
                className="text-gray-200 text-left p-2"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
