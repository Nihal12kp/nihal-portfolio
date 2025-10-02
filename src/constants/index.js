import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project 3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = ` Aspiring MERN Stack Developer with academic knowledge and internship experience in full-stack application
 development. Skilled in building scalable, secure, and user-friendly web solutions using the MERN stack, with
 hands-on experience in e-commerce platforms, API integrations, authentication, and responsive design. Strong
 foundational knowledge in IT Support (troubleshooting, system maintenance, networking, operating systems) and
 familiar with Cloud Computing technologies including AWS, Azure, and Google Cloud, with exposure to
 deployment, virtualization, and backup practices. Passionate about modern technologies and contributing to
 innovative IT and cloud projects`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 – Jul 2025",
    role: "Junior MERN Stack Developer",
    company: "Soften Technologies",
    description: `Worked on full-stack e-commerce and web applications using the MERN stack. 
    Built scalable frontend and backend solutions, integrated Razorpay payments and Nodemailer for email automation, 
    and implemented authentication with JWT and Bcrypt. Collaborated with mentors on cloud deployment (AWS, Azure, GCP), 
    debugging, and performance optimization.`,
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Razorpay", },
      { name: "Nodemailer", logo: "https://img.icons8.com/?size=512&id=61082&format=png" }
    ],
  },
];


export const PROJECTS = [
  {
    title: "Jersey Blitz – E-Commerce Web App",
    image: project1,
    description:
      "A full-stack MERN e-commerce platform with authentication, cart, orders, and admin panel. Integrated Razorpay for payments and Nodemailer for automated email alerts. Secure login with JWT and Bcrypt.",
    technologies: ["MongoDB","Express", "React", "Node.js", "Razorpay", "Nodemailer", "JWT", "Bcrypt",],
    github: "https://github.com/Nihal12kp/Jersey-Blitz-Ecommerce.git",
  },
  {
    title: "Cryptoplace – Cryptocurrency Dashboard",
    image: project2,
    description:
      "A React.js application that fetches real-time cryptocurrency data using the CoinGecko API. Features responsive UI, error handling, and optimized API performance.",
    technologies: ["React", "CoinGecko API", "JavaScript", "CSS"],
    github: "https://github.com/Nihal12kp/Cryptoplace-React-frontend-.git",
  },
  {
    title: "Todo-List App",
    image: project3,
    description:
      "A CRUD task management app built with React.js. Features real-time UI updates, persistent storage using localStorage, and optimized performance.",
    technologies: ["React", "JavaScript", "CSS", "localStorage"],
    github: "https://github.com/Nihal12kp/My-Todo-List.git",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
