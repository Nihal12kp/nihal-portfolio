import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/nihallogo.jpg";

const Navbar = () => {
  return (
    <motion.nav
      className="flex flex-wrap lg:flex-nowrap items-center justify-between py-4 px-6 lg:px-20 sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <motion.img
            src={logo}
            alt="Logo"
            className="mx-2 w-12 h-auto lg:w-14"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-4 lg:mt-0 flex items-center justify-center gap-6 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/mhmdnihalkp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.2, color: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://www.github.com/in/Nihal12kp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.2, color: "#171515" }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/in/_.ni_hal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          whileHover={{ scale: 1.2, color: "#E4405F" }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
