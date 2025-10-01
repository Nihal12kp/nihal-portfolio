import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/nihallogo.jpg";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} />"
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mhmdnihalkp"
          target="-blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/in/Nihal12kp"
          target="-blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub/>
        </a>
        <a
          href="https://www.instagram.com/in/_.ni_hal"
          target="-blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaInstagram/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
