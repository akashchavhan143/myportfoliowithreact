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
} from "react-icons/fa";
import "../styles/Skill1.css";

const skills = [
  { icon: <FaHtml5 />, title: "HTML5", level: "Advanced", color: "#f16529" },
  { icon: <FaCss3Alt />, title: "CSS3", level: "Advanced", color: "#2965f1" },
  { icon: <FaJs />, title: "JavaScript", level: "Advanced", color: "#f7df1e" },
  { icon: <FaReact />, title: "React", level: "Advanced", color: "#61dafb" },
  { icon: <FaVuejs />, title: "Vue.js", level: "Intermediate", color: "#42b883" },
  { icon: <FaNodeJs />, title: "Node.js", level: "Intermediate", color: "#3c873a" },
  { icon: <FaDatabase />, title: "MongoDB", level: "Intermediate", color: "#4db33d" },
  { icon: <FaGitAlt />, title: "Git", level: "Advanced", color: "#f34f29" },
];

const Skills1 = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>
          My <span className="highlight">Skills</span>
        </h2>
        <div className="divider"></div>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="animated-skill-card"
            style={{ "--color": skill.color }}
          >
            <i className="skill-icon">{skill.icon}</i>
            <div className="title">{skill.title}</div>
            <div className="description">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills1;
