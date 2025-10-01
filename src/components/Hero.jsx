import profilepic from "../assets/nihalprofile.jpg";
import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <div className="relative max-w-md">
            <img
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
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10">
          <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
            Muhammed Nihal
          </h2>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
            Software Developer
          </span>
          <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            {HERO_CONTENT}
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full px-6 py-3 text-sm font-semibold text-stone-800 shadow-md hover:shadow-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
