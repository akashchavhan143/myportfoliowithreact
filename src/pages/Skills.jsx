import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaAngular,
  FaPhp,
  FaLaravel,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitlab,
  FaJenkins
} from "react-icons/fa";
import "../styles/Skills.css"; // Make sure to create this CSS file
import { SiAntdesign, SiMysql, SiSpringboot, SiTestinglibrary } from "react-icons/si";
import { GiCalculator } from "react-icons/gi";
const skills = [
  { icon: <FaHtml5 className="icon orange" />, name: "HTML5", level: "Advanced" },
  { icon: <FaCss3Alt className="icon blue" />, name: "CSS3", level: "Advanced" },
  { icon: <FaJs className="icon yellow" />, name: "JavaScript", level: "Advanced" },
  { icon: <FaReact className="icon cyan" />, name: "React", level: "Advanced" },
 


  { icon: <FaGitAlt className="icon orange-dark" />, name: "Git", level: "Advanced" },
  { icon: <FaJava className="icon blue-dark" />, name: "Java", level: "Advanced" },
  { icon: <FaPython className="icon blue" />, name: "Python", level: "Intermediate" },
  { icon: <FaBootstrap className="icon purple" />, name: "Bootstrap", level: "Advanced" },
  { icon: <FaGithub className="icon gray" />, name: "GitHub", level: "Advanced" },

  { icon: <FaAws className="icon orange" />, name: "AWS", level: "Beginner" },
  { icon: <FaDocker className="icon blue" />, name: "Docker", level: "Intermediate" },
   { name: "Jenkins", icon: <FaJenkins className="icon red-dark" />, level: "Intermediate" },
  { name: "Ant Design", icon: <SiAntdesign className="icon pink" />, level: "Advanced" },
 { name: "Spring Boot", icon: <SiSpringboot className="icon green-dark" />, level: "Advanced" },
  
  { name: "Manual Testing", icon: <SiTestinglibrary className="icon purple" />, level: "Advanced" },
  { name: "SQL", icon: <SiMysql className="icon blue-light" />, level: "Advanced" },
  { name: "Mathematics", icon: <GiCalculator className="icon purple" />, level: "Strong Foundation" }
];
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>
            My <span className="highlight">Skills</span>
          </h2>
          <div className="divider"></div>
          <p>Technologies I work with</p>
        </div>
       <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill.icon}
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
