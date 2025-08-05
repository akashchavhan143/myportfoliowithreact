import React, { useState } from "react";
import { Card, Button, Tag } from "antd";
import { GithubOutlined, LinkOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../styles/Projects.css"; 

const projects = [
  {
    title: "Multi-Vendor E-Commerce Application",
    description:
      "A fully responsive e-commerce platform with role-based access for Admin, Seller, Delivery Personnel, and Customer, featuring product management, search functionality, order tracking, and responsive design.",
    image: "/placeholder.svg",
    technologies: ["Spring Boot", "React", "Bootstrap", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Employee Management System (EMS)",
    description:
      "A CRUD-based Employee Management System for handling employee records, featuring a responsive React UI with Spring Boot backend REST APIs and MySQL for data management.",
    image: "/placeholder.webp",
    technologies: ["Spring Boot", "React", "Bootstrap", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Personal Portfolio Application",
    description:
      "A modern personal website showcasing skills and projects using HTML, CSS, and JavaScript with responsive design and interactive elements.",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Online Quiz Application",
    description: "A simple online quiz application with multiple-choice questions and scoring system.",
    image: "/placeholder.svg",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Blog Application",  
    description: "A blogging platform allowing users to create, edit, and comment on posts.",
    image: "/placeholder.svg",
    technologies: ["Spring Boot", "React", "Bootstrap", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management Application",
    description: "A task management tool for creating, updating, and deleting tasks with user authentication.",
    image: "/placeholder.svg",
    technologies: ["Spring Boot", "React", "Bootstrap", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application with user authentication and message history.",
    image: "/placeholder.svg",
    technologies: ["Spring Boot", "React", "WebSocket"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Weather Application",
    description: "A weather application fetching real-time weather data from an API.",
    image: "/placeholder.svg",
    technologies: ["React", "API Integration"],
    liveUrl: "#",
    codeUrl: "#",
    },
  
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4); // Show 6 initially
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>
          My <span className="highlight">Projects</span>
        </h2>
         <div className="divider" />
        <p>Some of my recent work</p>
       
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div className="flip-card project-card-appear"  style={{ animationDelay: `${index * 0.1}s` }} key={index}>
            <div className="flip-card-inner" style={{}}>
              {/* Front Side */}
              <div className="flip-card-front" style={{}}>
                <Card
                  hoverable
                  className="project-card"
                  cover={
                    <img
                      alt={project.title}
                      src={project.image}
                      className="project-img"
                    />
                  }
               
                >
                  <Card.Meta
                    title={project.title}
                    description={<p className="project-desc">{project.description}</p>}
                  />
                  <div className="tech-tags">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Tag key={i} color="blue">
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 3 && (
                      <Tag color="blue">
                        +{project.technologies.length - 3}
                      </Tag>
                    )}
                  </div>
                </Card>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <Card className="project-card back">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <Tag key={i} color="geekblue">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <Button
                      type="primary"
                      icon={<LinkOutlined />}
                      href={project.liveUrl}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button
                      icon={<GithubOutlined />}
                      href={project.codeUrl}
                      target="_blank"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <Button type="primary" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All Projects"} <ArrowRightOutlined /> 
        </Button>
      </div>
    </section>
  );
};

export default Projects;
