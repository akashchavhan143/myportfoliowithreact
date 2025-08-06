import React from "react";

const DeveloperLandingPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.name}>
          Hi, I'm <strong>AKASH CHAVHAN</strong>
        </h1>
        <h2 style={styles.role}>Full Stack Developer</h2>
        <p style={styles.description}>
          I build scalable, high-performance web applications with modern
          technologies across both frontend and backend.
          <br />
          From designing responsive UIs to integrating robust APIs and databases,
          I deliver full-fledged digital solutions.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at center right, #0a4a8a, #030c26 80%)",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    maxWidth: 600,
  },
  name: {
    color: "#4dc8ff",
    fontSize: "2.5rem",
    marginBottom: 4,
  },
  role: {
    color: "#1d7ad9",
    fontStyle: "normal",
    marginBottom: 12,
  },
  description: {
    fontStyle: "italic",
    lineHeight: 1.5,
    fontSize: "1.1rem",
  },
};

export default DeveloperLandingPage;