import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiPostman, SiVercel, SiNetlify, SiHeroku, SiCloudinary } from "react-icons/si";
import { FaAws, FaMicrosoft, FaGoogle, FaWindows, FaLinux } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdCloud, MdSecurity } from "react-icons/md";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* MERN Stack */}
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <SiExpress className="text-7xl text-neutral-400" />
        </div>
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <SiNodedotjs className="text-7xl text-green-600" />
        </div>

        {/* Core Languages & Frontend */}
        <div className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="p-4">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>

        {/* Cloud Platforms */}
        <div className="p-4">
          <FaAws className="text-7xl text-orange-400" />
        </div>
        <div className="p-4">
          <FaMicrosoft className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <FaGoogle className="text-7xl text-red-500" />
        </div>
        <div className="p-4">
          <SiCloudinary className="text-7xl text-blue-300" />
        </div>

        {/* Deployment Platforms */}
        <div className="p-4">
          <SiVercel className="text-7xl text-black" />
        </div>
        <div className="p-4">
          <SiNetlify className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <SiHeroku className="text-7xl text-purple-600" />
        </div>

        {/* Development Tools */}
        <div className="p-4">
          <SiGit className="text-7xl text-orange-600" />
        </div>
        <div className="p-4">
          <SiGithub className="text-7xl text-gray-800" />
        </div>
        <div className="p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </div>

        {/* Operating Systems */}
        <div className="p-4">
          <FaWindows className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <FaLinux className="text-7xl text-yellow-600" />
        </div>

        {/* IT Support & Security */}
        <div className="p-4">
          <BiSupport className="text-7xl text-green-400" />
        </div>
        <div className="p-4">
          <MdSecurity className="text-7xl text-red-500" />
        </div>
        <div className="p-4">
          <MdCloud className="text-7xl text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
