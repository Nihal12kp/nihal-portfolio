import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";

const Projects = () => {
  return (
    <div className="pb-24 px-4 lg:px-20">
      <motion.h2
        className="my-20 text-center text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => {
          const fromLeft = index % 2 === 0; // alternate direction
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
              {/* Project Image */}
              <motion.div
                className="w-full lg:w-1/4 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded shadow-lg"
                />
              </motion.div>

              {/* Project Details */}
              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <h3 className="mb-2 font-semibold text-2xl lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-stone-400 text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
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

                {/* GitHub Link */}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
