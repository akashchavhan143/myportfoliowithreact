import React from "react";
import { Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "../styles/Home.css"; // Assuming you have a CSS file for styling
import profileimg from '../assets/AKASH_Paasphoto_35_45.png'
const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <div className="home-left">
          <h1 className="home-title">
            Hi, I'm <span className="glow">AKASH CHAVHAN</span>
          </h1>
          <h2 className="subtitle">Full Stack Developer</h2>
          <p className="description">
            I build scalable, high-performance web applications with modern
            technologies across both frontend and backend. <br />
            From designing responsive UIs to integrating robust APIs and
            databases, I deliver full-fledged digital solutions.
          </p>
          <div className="home-buttons">
            <Button type="primary" size="large" className="glow-btn">
              View My Work
            </Button>
            <Button type="default" size="large" className="border-cyan">
              Contact Me
            </Button>
          </div>
          <div className="social-icons">
            <GithubOutlined />
            <LinkedinOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
          </div>
        </div>

        <div className="home-right">
          <div className="profile-pic-container">
            <img
              src={profileimg}
              alt="Akash"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
