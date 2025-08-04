import React from "react";
import { Card, Col, Row, Tag, Tooltip } from "antd";
import { CheckCircleTwoTone, InfoCircleOutlined } from "@ant-design/icons";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "Java Developer Certification",
    issuer: "QSpiders Hadapsar",
    date: "June 2024",
    tag: "Java"
  },
  {
    title: "Manual Testing Certification",
    issuer: "QSpiders Hadapsar",
    date: "May 2024",
    tag: "Testing"
  },
  {
    title: "SQL Certification",
    issuer: "QSpiders Hadapsar",
    date: "April 2024",
    tag: "Database"
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "March 2024",
    tag: "Web Dev"
  },
  {
    title: "React Mastery Course",
    issuer: "Coursera",
    date: "February 2024",
    tag: "React"
  },
  {
    title: "Spring Boot Fundamentals",
    issuer: "Great Learning",
    date: "January 2024",
    tag: "Backend"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="cert-header">
        <h2>
          🎓My <span className="highlight"> Certifications</span>
        </h2>
        <div className="divider"></div>
        <p className="cert-sub">Verified credentials from trusted platforms</p>
      </div>

      <Row gutter={[24, 24]} >
        {certifications.map((cert, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
            style={{textAlign: "center",justifyContent: "center"}}
              className="cert-card fancy-hover"
              hoverable
            ><div className="cert-title" style={{textAlign: "center",justifyContent: "center"}}>
                  {cert.title}
                 
                  <Tooltip title="Verified Certification">
                    <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginLeft: 8 }} />
                  </Tooltip>
             </div>
              <div className="divider"></div>
              <p className="cert-meta"><InfoCircleOutlined /> <strong>Issuer:</strong> {cert.issuer}</p>
              <p className="cert-meta"><strong>Date:</strong> {cert.date}</p>
              <Tag color="geekblue" className="cert-tag">{cert.tag}</Tag>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Certifications;
