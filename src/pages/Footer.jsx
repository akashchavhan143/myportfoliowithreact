import React, { useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <h2 className="footer-name">Akash Chavhan</h2>
            <div className="footer-tagline">Crafting Digital Excellence</div>
          </div>
          <p className="footer-role">Full Stack Developer | React & Java</p>
          <p className="footer-contact">akashchavhan512786@gmail.com</p>
        </div>

        <div className="footer-center">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-section-title">Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/akashchavhan143" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/akashchavhan143" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="mailto:akashchavhan512786@gmail.com" className="social-link">
              <FaEnvelope />
              <span className="social-tooltip">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {currentYear} Akash Chavhan. All Rights Reserved.</p>
          <div className="footer-heart">
            Made with <span className="heart">❤️</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
