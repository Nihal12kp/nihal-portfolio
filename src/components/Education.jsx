import { motion } from "framer-motion";
import { EDUCATION } from "../constants/index.js";

const Education = () => {
  return (
    <div className="pb-24 px-4 lg:px-20">
      <motion.h2
        className="my-20 text-center text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      <div className="flex flex-col gap-12">
        {EDUCATION.map((edu, index) => {
          const fromLeft = index % 2 === 0; // alternate animation direction
          return (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
              initial={{
                opacity: 0,
                x: fromLeft ? -50 : 50,
                y: 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Year */}
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-stone-400">{edu.year}</p>
              </div>

              {/* Education Image */}
              <motion.div
                className="w-full lg:w-1/12 flex justify-center mb-2 lg:mb-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={edu.image}
                  alt={edu.degree}
                  className="h-16 w-16 object-cover rounded-full"
                />
              </motion.div>

              {/* Degree & Institution */}
              <motion.div
                className="w-full max-w-xl lg:w-3/4 lg:pl-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <h3 className="mb-2 font-semibold text-lg lg:text-xl">
                  {edu.degree}
                </h3>
                <p className="text-stone-400 text-sm lg:text-base">
                  {edu.institution}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
