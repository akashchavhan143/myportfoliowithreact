// src/data/portfolioData.js
// src/data/skills.js
import { FaJava, FaReact, FaBootstrap } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiMysql } from "react-icons/si";
export const about = {
  name: "Akash Chavhan",
  role: "Full Stack Developer",
  description: "I build web applications using React and Spring Boot.",
};



export const skills = [
  {
    name: "Java",
    icon: "FaJava",
    color: "#f89820",
  },
  {
    name: "Spring Boot",
    icon: "SiSpringboot",
    color: "#6DB33F",
  },
  {
    name: "React",
    icon: "FaReact",
    color: "#61DBFB",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    color: "#f0db4f",
  },
  {
    name: "MySQL",
    icon: "SiMysql",
    color: "#00758f",
  },
  {
    name: "Bootstrap",
    icon: "FaBootstrap",
    color: "#7952B3",
  },
];


export const projects = [
  {
    title: "BuyZone",
    description: "A multi-vendor e-commerce platform.",
    techStack: ["React", "Spring Boot", "MySQL"],
    link: "https://buyzone.com",
  },
  {
    title: "EMS",
    description: "Employee management system with CRUD operations.",
    techStack: ["React", "Spring Boot"],
    link: "https://ems.com",
  },
];
