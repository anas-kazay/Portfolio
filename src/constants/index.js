import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Passionate about coding, proficient in modern technologies, and equipped with a solid foundation in software and distributed computer systems engineering. Currently pursuing a State Engineering diploma at Ecole Normale Supérieure de l’Enseignement Technique Mohammedia, I specialize in backend development, frontend frameworks, and DevOps tools. Let's build innovative solutions together.`;

export const ABOUT_TEXT = `I am Anas Kazay, a 22-year-old software engineering student passionate about technology and innovation. I started with a Technical University degree in Computer Engineering from the Higher School of Technology of Agadir, graduating with distinction. Currently, I am pursuing a State Engineering diploma at Ecole Normale Supérieure de l’Enseignement Technique Mohammedia, specializing in Software and Distributed Computer Systems Engineering. My education is complemented by internships where I designed and developed web applications, e-commerce sites, and portfolios, honing my skills in backend and frontend technologies.

Proficient in Java, JavaScript, C, C++, and PHP, I also have strong database management skills with MySQL, MongoDB, and OracleDB. My knowledge of DevOps tools like Git, Docker, and Kubernetes allows me to contribute effectively to modern software development. Fluent in Arabic, French, and English, I am an avid reader, coder, and cycling enthusiast, always eager to learn, take on new challenges, and contribute to the tech community.`;

export const EXPERIENCES = [
  {
    year: " August 2023",
    role: "Full Stack Developer",
    company: "From Telecom",
    description: `Developing a farm managemet system, that will be intergated with IoT devices. To help farmers manage their Milking devices and increase their productivity.`,
    technologies: ["PHP", "MySql", "JavaScript", "Bootstrap"],
  },
  {
    year: " April & May 2022",
    role: "Full Stack Developer",
    company: "Intuitive Design",
    description: `Developing an ecommece website to sell cosmitic products`,
    technologies: ["PHP", "MySql", "JavaScript", "Bootstrap"],
  },
  {
    year: " August 2021",
    role: "Frontend Developer",
    company: "AJI COD",
    description: `Developing a portolio for the manager of the company.`,
    technologies: ["JavaScript", "Bootstrao"],
  },
];

export const PROJECTS = [
  {
    title: "E-Banking Website",
    image: project1,
    description:
      "An e-commerce website that help managers to manage  bank accounts and transactions.",
    technologies: ["Spring Boot", "Angular", "Bootstrap", "MySql"],
  },
  {
    title: "Blog website",
    image: project2,
    description:
      "A blog that can be used for by anowone to post. He just need to create an account, and he is good to go.",
    technologies: ["NodeJs", "React", "Tailwind", "MongoDB"],
  },
  {
    title: "Todo App",
    image: project3,
    description: "A simple todo app that help you to manage your tasks.",
    technologies: ["Spring Boot", "React", "Bootstrap", "h2-database"],
  },
];

export const CONTACT = {
  address: "Agadir, Morocco",
  phoneNo: "+212 634768129 ",
  email: "anaskazay@gmail.com",
};

export const EDUCATION = [
  {
    title:
      "State engineering diplomaEcole Normale Supérieure de l’Enseignement Technique Mohammedia",
    option: "Software and Distributed Computer Systems Engineering.",
    year: "2022- present",
    distinction: "",
  },
  {
    title:
      "Technical University degree. Higher School of Technology of Agadir. ",
    option: "Computer Engineering",
    year: " 2020- 2022",
    distinction: "Good",
  },
  {
    title: "Baccalaureate. AL FATH High School, Dakhla.",
    option: "Physical Sciences",
    year: " 2019- 2020",
    distinction: "With Honors",
  },
];
