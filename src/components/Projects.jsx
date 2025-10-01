import { PROJECTS } from "../constants/index.js";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Project Image */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mb-2 inline-block rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
