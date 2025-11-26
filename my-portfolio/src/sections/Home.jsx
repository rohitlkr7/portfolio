import { useEffect, useMemo, useState } from "react";
import PartBackgrounds from "../Components/PartBackgrounds";
import { motion } from "framer-motion";

export default function Home() {
  const role = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Javascript Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = role[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % role.length);
        }
      },
      deleting ? 40 : 60
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, role]);

  return (
    <section id="Home" className="w-full h-screen bg-black overflow-hidden">
      <PartBackgrounds />

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-30 
            w-[70vw] sm:w-[50vw] md:w-[40vw] 
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-30 md:opacity-20
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0 
            w-[70vw] sm:w-[50vw] md:w-[40vw] 
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-30 md:opacity-20
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse delay-500"
        ></div>
      </div>

      {/* Text Section */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{role[index].substring(0, subIndex)}</span>

              <span
                className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1.5rem" }}
              ></span>
            </motion.div>
            <h1 className="text-white">Hello I'm
            <span className="text-white text-">Rohit Kumar</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}
