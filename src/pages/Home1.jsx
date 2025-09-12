import { Button, Col, Row } from "antd";
import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import profileimg from "../assets/imag3.png";
import "../styles/Home.css"; // Assuming you have a CSS file for styling
const Home1 = () => {
  return (
    <div id="home" className="home-section">
      {/* tow equal section for image and  text horizonta for destonand  vertical for phone */}
      <Row
        gutter={[16, 16]} // gap between columns
        style={{
       

       
        }}
      >
        <Col xs={24} md={12} style={{ }}>
          <div
            style={{
              padding: "20px",
              textAlign: "left",
              fontSize: "20px",
            }}
          >
            <h1>
              Hi, I'm <span className="glow">AKASH CHAVHAN</span>
            </h1>
            <br />
            <h2 className="subtitle">Full Stack Developer</h2>
            <p className="description">
              I build scalable, high-performance web applications with modern
              technologies across both frontend and backend. <br />
              From designing responsive UIs to integrating robust APIs and
              databases, I deliver full-fledged digital solutions.
            </p>

            <div className="home-buttons" style={{ marginTop: "20px" }}>
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
        </Col>

        {/* <Col xs={24} md={12} style={{ border: "2px solid cyan" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{ position: "relative", 
                border: "2px solid red",
                width: "480px",
                 height: "480px"
                
                }}
            >
            
              <div
                style={{
                     border: "2px solid green",
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  width: "420px",
                  height: "420px",
                  backgroundColor: "cyan",
                  borderRadius: "60% 40% 45% 55% / 55% 60% 40% 45%",
                  filter: "blur(0px)",
                  zIndex: 1,
                  padding: 0,
                }}
              ></div>

            
              <img
                src={profileimg}
                alt="Profile"
                style={{
                  position: "relative",

                  width: "450px",
                  height: "450px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  zIndex: 2,
                  top: "0px",
                  left: "15px",
                }}
              />
            </div>
          </div>
        </Col> */}
        <Col xs={24} md={12} style={{ }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
           
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "550px", // or 80vw for mobile
                aspectRatio: "1", // maintain square
              }}
            >
              {/* Abstract Shape */}
              <div
                className="profile-shape"
                style={{
                  position: "absolute",
                  top: "6%",
                  left: "6%",
                  width: "88%",
                  height: "88%",
                  backgroundColor: "var(--home-accent)",
                  borderRadius: "60% 40% 45% 55% / 55% 60% 40% 45%",
                  filter: "blur(0px)",
                  zIndex: 1,
                }}
              >     {/* Profile Image */}
              <img
                src={profileimg}
                alt="Profile"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  objectFit: "contain",
                  // borderRadius: "50%",
                  borderRadius: "60% 40% 45% 55% / 55% 60% 40% 45%",
                  zIndex: 2,
                }}
              /></div>

         
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home1;
