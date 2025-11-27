
import { motion } from "framer-motion";
import RP from '../assets/8517.JPG'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
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
            rounded-full bg-linear-to-r from-[#3e397a] via-[#40c97e] to-[#60dbd7]
            opacity-30 sm:opacity-30 md:opacity-20
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse delay-500"
        ></div>
      </div>
       <div className="relative z-10 h-screen max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
           <motion.div
            className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
            initial={{opacity:0 , y:24}}
            whileInView={{opacity:0, y:0}}
            transition={{duration:0.8}}
            viewport={{once:true , amount:0.4}}
           >
             
             <motion.div>
                <img src={RP} alt="ROHIT PHOTO" className="relative"/>
             </motion.div>

           </motion.div>
       </div>
    </section>
  );
};

export default About;
