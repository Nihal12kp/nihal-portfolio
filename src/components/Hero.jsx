import { motion } from "framer-motion";
import profilepic from "../assets/nihalprofile.jpg";
import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <div className="pb-8 lg:pb-36 px-4 lg:px-20">
      <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center">
        {/* Profile Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:p-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative max-w-md w-full">
            <motion.img
              src={profilepic}
              alt="Muhammed Nihal"
              className="w-full h-auto rounded-3xl"
              style={{
                WebkitMaskImage: `
                  linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%),
                  linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%)`,
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="pb-2 text-4xl lg:text-8xl text-center lg:text-left tracking-tighter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Muhammed Nihal
          </motion.h2>

          <motion.span
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl lg:text-5xl text-transparent tracking-tight text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Software Developer
          </motion.span>

          <motion.p
            className="my-4 max-w-lg py-6 text-lg lg:text-xl leading-relaxed tracking-tight text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            href="/Nihalkp_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full px-6 py-3 text-sm lg:text-base font-semibold text-stone-800 shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
