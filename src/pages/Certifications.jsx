import React from "react";
import { Col, Row, Tag, Tooltip } from "antd";

import {
 
 CheckCircleTwoTone,
  InfoCircleOutlined,
  FileDoneOutlined,
  CodeOutlined,
  BugOutlined,
  DatabaseOutlined,
  Html5Outlined,
  
  ApiOutlined,
  PythonOutlined
} from "@ant-design/icons";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "Java Developer Certification",
    issuer: "QSpiders Hadapsar",
    date: "June 2024",
    tag: "Java",
    color: "#f16529",
    icon: <CodeOutlined />
  },
  {
    title: "Manual Testing Certification",
    issuer: "QSpiders Hadapsar",
    date: "May 2024",
    tag: "Testing",
    color: "#00a6ed",
    icon: <BugOutlined />
  },
  {
    title: "SQL Certification",
    issuer: "QSpiders Hadapsar",
    date: "April 2024",
    tag: "Database",
    color: "#2965f1",
    icon: <DatabaseOutlined />
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "March 2024",
    tag: "Web Dev",
    color: "#42b883",
    icon: <Html5Outlined />
  },
  {
    title: "React Mastery Course",
    issuer: "Coursera",
    date: "February 2024",
    tag: "React",
    color: "#61dafb",
    icon: <PythonOutlined />
  },
  {
    title: "Spring Boot Fundamentals",
    issuer: "Great Learning",
    date: "January 2024",
    tag: "Backend",
    color: "#3c873a",
    icon: <ApiOutlined />
  }
];


const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="cert-header">
        <h2>
          🎓My <span className="highlight">Certifications</span>
        </h2>
        <div className="divider" />
        <p className="cert-sub">Verified credentials from trusted platforms</p>
      </div>

      <Row gutter={[24, 24]}>
        {certifications.map((cert, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <div
              className="animated-cert-card"
              style={{ "--color": cert.color }}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
  {cert.icon}
</div>
              <div className="cert-title">
                {cert.title}
                
              </div>
              <p className="cert-meta">
                <InfoCircleOutlined /> <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="cert-meta">
                <strong>Date:</strong> {cert.date}<Tooltip title="Verified Certification">
                  <CheckCircleTwoTone
                    twoToneColor="#52c41a"
                    style={{ marginLeft: 8 }}
                  />
                </Tooltip>
              </p>
              
              <Tag color="geekblue" className="cert-tag">
                {cert.tag}
              </Tag>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Certifications;
