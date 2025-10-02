import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiPostman, SiVercel, SiNetlify, SiHeroku, SiCloudinary } from "react-icons/si";
import { FaAws, FaMicrosoft, FaGoogle, FaWindows, FaLinux } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdCloud, MdSecurity } from "react-icons/md";

const icons = [
  { component: SiMongodb, color: "text-green-500" },
  { component: SiExpress, color: "text-neutral-400" },
  { component: RiReactjsLine, color: "text-cyan-400" },
  { component: SiNodedotjs, color: "text-green-600" },
  { component: SiJavascript, color: "text-yellow-400" },
  { component: SiHtml5, color: "text-orange-500" },
  { component: SiCss3, color: "text-blue-500" },
  { component: FaAws, color: "text-orange-400" },
  { component: FaMicrosoft, color: "text-blue-500" },
  { component: FaGoogle, color: "text-red-500" },
  { component: SiCloudinary, color: "text-blue-300" },
  { component: SiNetlify, color: "text-cyan-500" },
  { component: SiHeroku, color: "text-purple-600" },
  { component: SiVercel, color: "text-black" },
  { component: SiGit, color: "text-orange-600" },
  { component: SiGithub, color: "text-gray-800" },
  { component: SiPostman, color: "text-orange-500" },
  { component: FaWindows, color: "text-blue-400" },
  { component: FaLinux, color: "text-yellow-600" },
  { component: BiSupport, color: "text-green-400" },
  { component: MdSecurity, color: "text-red-500" },
  { component: MdCloud, color: "text-blue-300" },
];

const Technologies = () => {
  return (
    <div className="pb-24 px-4 lg:px-20">
      <h2 className="my-20 text-center text-4xl lg:text-5xl font-semibold">
        Technologies
      </h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="p-4 bg-stone-900/50 rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
              variants={{
                hidden: { opacity: 0, x: fromLeft ? -40 : 40, y: 20 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <IconComponent className={`text-6xl lg:text-7xl ${icon.color}`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
