import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-name">Akash Chavhan</h2>
          <p className="footer-role">Full Stack Developer | React & Java</p>
          <p className="footer-contact">akashchavhan512786@gmail.com</p>
        </div>

        <div className="footer-center">
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a href="https://github.com/akashchavhan143" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/akashchavhan143" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:akashchavhan512786@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Akash Chavhan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
