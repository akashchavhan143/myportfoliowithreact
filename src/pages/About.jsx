import React from "react";
import "../styles/About.css"; // Import your CSS file
import profileImage from "../assets/imageHoody.png"; // Adjust the path as necessary
import { Button, Col, Row } from "antd";
const About = () => {
  return (
    <section id="about" className="about-section" style={{}}>
      <div className="about-container">
        <div className="about-header">
          <h2>
            About <span className="highlight">Me</span>
          </h2>
          <div className="divider"></div>
        </div>

       <br />
          <Button  type='primary' style={{marginRight:"10px"}}>primary</Button>
              <Button  type='dashed' style={{marginRight:"10px"}}>dashed</Button>
                  <Button  type='link' style={{marginRight:"10px"}}>link</Button>
                      <Button  type='text' style={{marginRight:"10px"}}>text</Button>
                          <Button  type='default' style={{marginRight:"10px"}}>default</Button> 
      </div>
      <Row
        gutter={[16, 16]} // gap between columns
        style={{}}
      >
        {" "}
        <Col xs={24} md={10} style={{}}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div className="about-image">
              <img src={profileImage} alt="Profile" />
            </div>
          </div>
        </Col>
        <Col xs={24} md={14} style={{}}>
          <div
            style={{
              padding: "20px",
              textAlign: "left",
              fontSize: "20px",
            }}
          >
            <div className="about-text">
              <p>
                Hello! I'm <strong>Akash Chavhan</strong>, a passionate
                full-stack developer skilled in building modern and
                user-friendly web applications. I specialize in{" "}
                <strong>Java, Spring Boot, React, MySQL, and Bootstrap</strong>.
              </p>
              <p>
                I love solving real-world problems and turning ideas into
                digital experiences. I am highly committed to writing clean,
                efficient code and continuously learning the latest
                technologies.
              </p>
              <p>
                In addition to development, I have experience in manual testing
                and project coordination. I'm looking for opportunities where I
                can grow as a developer and contribute meaningfully to impactful
                projects.
              </p>

              <a
                href="/AkashChavhan_Resume.pdf"
                download
                className="btn-download"
                style={{ marginTop: "20px" }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
