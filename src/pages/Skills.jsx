import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt
} from "react-icons/fa";
import "../styles/Skills.css"; // Make sure to create this CSS file

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
          <div className="skill-card">
            <FaHtml5 className="icon orange" />
            <h3>HTML5</h3>
            <p>Advanced</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="icon blue" />
            <h3>CSS3</h3>
            <p>Advanced</p>
          </div>
          <div className="skill-card">
            <FaJs className="icon yellow" />
            <h3>JavaScript</h3>
            <p>Advanced</p>
          </div>
          <div className="skill-card">
            <FaReact className="icon cyan" />
            <h3>React</h3>
            <p>Advanced</p>
          </div>
          <div className="skill-card">
            <FaVuejs className="icon green" />
            <h3>Vue.js</h3>
            <p>Intermediate</p>
          </div>
          <div className="skill-card">
            <FaNodeJs className="icon green-dark" />
            <h3>Node.js</h3>
            <p>Intermediate</p>
          </div>
          <div className="skill-card">
            <FaDatabase className="icon blue-light" />
            <h3>MongoDB</h3>
            <p>Intermediate</p>
          </div>
          <div className="skill-card">
            <FaGitAlt className="icon orange-dark" />
            <h3>Git</h3>
            <p>Advanced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
