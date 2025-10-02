import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-24 px-4 lg:px-20">
      <h2 className="my-20 text-center text-4xl lg:text-5xl">Experience</h2>

      <div className="flex flex-col gap-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Year & Logo Section */}
            <div className="flex lg:flex-col items-center gap-4 w-full lg:w-1/4">
              <p className="text-sm text-stone-400">{experience.year}</p>
              {experience.image && (
                <motion.img
                  src={experience.image}
                  alt={experience.company}
                  className="h-12 w-12 object-cover rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                />
              )}
            </div>

            {/* Details Section */}
            <motion.div
              className="w-full lg:w-3/4 bg-stone-950/40 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3 className="mb-2 font-semibold text-lg lg:text-xl">
                {experience.role}{" "}
                <span className="text-sm text-stone-500">
                  - {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400 text-sm lg:text-base">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300 hover:bg-stone-800 transition"
                    whileHover={{ scale: 1.1, backgroundColor: "#2c2c2c" }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    {tech.logo ? (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className={`w-5 h-5 object-contain ${
                          tech.name === "Express.js" ? "filter invert" : ""
                        }`}
                      />
                    ) : (
                      <span className="w-5 h-5 flex items-center justify-center text-xs">
                        ⚡
                      </span>
                    )}
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
