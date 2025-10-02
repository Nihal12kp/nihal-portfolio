import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project 3.png";

// education logos
import edu1 from "../assets/projects/soften.jpg";
import edu2 from "../assets/projects/apj.jpg";
import edu3 from "../assets/projects/kbhs.jpg";

export const HERO_CONTENT = `Aspiring MERN Stack Developer with internship experience in building full-stack web applications. Proficient in creating scalable, secure, and responsive solutions using the MERN stack, with experience in e-commerce platforms, API integrations, and authentication. Solid foundation in IT support and cloud technologies (AWS, Azure, Google Cloud), with hands-on exposure to deployment, virtualization, and system maintenance. Passionate about leveraging modern technologies to deliver innovative solutions.`;

export const ABOUT_TEXT = `Aspiring MERN Stack Developer with academic knowledge and internship experience in full-stack application development. Skilled in building scalable, secure, and user-friendly web solutions using the MERN stack, with hands-on experience in e-commerce platforms, API integrations, authentication, and responsive design. Strong foundational knowledge in IT Support (troubleshooting, system maintenance, networking, operating systems) and familiar with Cloud Computing technologies including AWS, Azure, and Google Cloud, with exposure to deployment, virtualization, and backup practices. Passionate about modern technologies and contributing to innovative IT projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 – Jul 2025",
    image: edu1, // Use imported logo directly
    role: "MERN Stack Developer Intern",
    company: "Soften Technologies",
    description: `Worked on full-stack e-commerce and web applications using the MERN stack. Built scalable frontend and backend solutions, integrated Razorpay payments and Nodemailer for email automation, and implemented authentication with JWT and Bcrypt. Collaborated with mentors on cloud deployment (AWS, Azure, GCP), debugging, and performance optimization.`,
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
     { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Razorpay" },
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
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Razorpay" },
      { name: "Nodemailer", logo: "https://img.icons8.com/?size=512&id=61082&format=png" },
      { name: "JWT" },
      { name: "Bcrypt" }
    ],
    github: "https://github.com/Nihal12kp/Jersey-Blitz-Ecommerce.git",
  },
  {
    title: "Cryptoplace – Cryptocurrency Dashboard",
    image: project2,
    description:
      "A React.js application that fetches real-time cryptocurrency data using the CoinGecko API. Features responsive UI, error handling, and optimized API performance.",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "CoinGecko API" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    github: "https://github.com/Nihal12kp/Cryptoplace-React-frontend-.git",
  },
  {
    title: "Todo-List App",
    image: project3,
    description:
      "A CRUD task management app built with React.js. Features real-time UI updates, persistent storage using localStorage, and optimized performance.",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "localStorage" }
    ],
    github: "https://github.com/Nihal12kp/My-Todo-List.git",
  },
];


export const EDUCATION = [
  {
    year: "Aug 2024 - Jan 2025",
    degree: "MERN Stack Training",
    institution: "Soften Technologies, Kochi, Kerala, India",
    image: edu1,
  },
  {
    year: "Aug 2019 - Jul 2023",
    degree: "Bachelor of Technology in Computer Science",
    institution: "MES College of Engineering, Kuttippuram, Kerala, India (APJ Abdul Kalam Technological University)",
    image: edu2,
  },
  {
    year: "Jun 2017 - Mar 2019",
    degree: "Higher Secondary Education (Computer Science)",
    institution: "GJHSS Naduvattam, Kerala, India (Department of Higher Secondary Education)",
    image: edu3,
  },
];

export const CONTACT = {
  address: "Sharjah - Muweilah - UAE",
  phoneNo: "+971 508975799",
  email: "mhmdnihal12kp@gmail.com",
};
