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
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
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
