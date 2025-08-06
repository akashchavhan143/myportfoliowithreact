import React, { useState } from "react";

const PortfolioLandingPage = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          PORT<span style={styles.logoAccent}>FOLIO</span>
        </div>
        <nav style={styles.nav}>
          <a href="#" style={{ ...styles.navItem, ...styles.navItemActive }}>
            Menu item 1
          </a>
          <a href="#" style={styles.navItem}>
            Menu item 2
          </a>
          <a href="#" style={styles.navItem}>
            Menu item
          </a>
          <a href="#" style={styles.navItem}>
            Menu item
          </a>
          <a href="#" style={styles.navItem}>
            Menu item
          </a>
        </nav>
        <div style={styles.toggleWrapper}>
          <label style={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
              style={{ display: "none" }}
            />
            <span
              style={{
                ...styles.toggleSlider,
                backgroundColor: toggle ? "#7a79e2" : "#444",
              }}
            >
              <span
                style={{
                  ...styles.toggleCircle,
                  left: toggle ? "20px" : "2px",
                }}
              />
            </span>
          </label>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.nameAccent}>AKASH CHAVHAN</span>
          </h1>
          <h2 style={styles.subHeading}>Full Stack Developer</h2>
          <p style={styles.description}>
            I build scalable, high-performance web applications with modern
            technologies across both frontend and backend.
            <br />
            From designing responsive UIs to integrating robust APIs and
            databases, I deliver full-fledged digital solutions.
          </p>

          <div style={styles.buttonGroup}>
            <button style={styles.hireMeButton}>Hire me</button>
            <button style={styles.connectButton}>Connect</button>
          </div>

          <div style={styles.socialIcons}>
            <a
              href="mailto:example@example.com"
              aria-label="Email"
              style={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6l8 5 8-5v2l-8 5-8-5V6z" />
              </svg>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.59 1.028 2.682 0 3.842-2.337 4.688-4.565 4.937.359.31.678.924.678 1.862 0 1.344-.012 2.427-.012 2.758 0 .268.18.58.688.48A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.98H8v-2.89h2.5v-2.2a3.5 3.5 0 013.75-3.85 15.7 15.7 0 012.27.2v2.5H14a1.5 1.5 0 00-1.66 1.66v2h2.83l-.45 2.89h-2.38v6.98A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.imageSection}>
          <img
            src="https://i.ibb.co/2mpXS1M/profile.jpg"
            alt="Akash Chavhan"
            style={styles.profileImage}
          />
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Orbitron', sans-serif",
    minHeight: "100vh",
    background:
      "radial-gradient(circle at right, #07202bff, #0c2532ff, #0f2049, #0c3341ff, #062437ff)",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #142445",
  },
  logo: {
    fontWeight: "900",
    fontSize: "1.5rem",
    flex: "0 0 auto",
  },
  logoAccent: {
    color: "#2986ff",
  },
  nav: {
    flex: "1 1 auto",
    display: "flex",
    gap: 24,
    marginLeft: 40,
  },
  navItem: {
    textDecoration: "none",
    color: "#44516f",
    fontSize: "0.9rem",
    fontWeight: "500",
    cursor: "pointer",
  },
  navItemActive: {
    color: "#2bdbd8",
    borderBottom: "3px solid #2bdbd8",
    paddingBottom: 2,
  },
  toggleWrapper: {
    flex: "0 0 auto",
    marginLeft: "auto",
  },
  toggleSwitch: {
    position: "relative",
    display: "inline-block",
    width: 42,
    height: 22,
  },
  toggleSlider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 34,
    transition: ".4s",
  },
  toggleCircle: {
    position: "absolute",
    height: 16,
    width: 16,
    backgroundColor: "white",
    borderRadius: "50%",
    top: 3,
    transition: ".4s",
  },
  mainContent: {
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 60px",
    gap: 60,
  },
  textSection: {
    maxWidth: 600,
  },
  heading: {
    fontSize: "3rem",
    marginBottom: 6,
  },
  nameAccent: {
    color: "#4ea6ff",
    fontWeight: "900",
    fontFamily: "'Orbitron', sans-serif",
  },
  subHeading: {
    fontSize: "1.2rem",
    color: "#4ea6ff",
    marginBottom: 16,
    fontFamily: "'Russo One', sans-serif",
  },
  description: {
    fontStyle: "italic",
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
    marginBottom: 30,
  },
  buttonGroup: {
    display: "flex",
    gap: 16,
    marginBottom: 30,
  },
  hireMeButton: {
    backgroundColor: "#4ea6ff",
    border: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "1rem",
    padding: "10px 24px",
    cursor: "pointer",
    borderRadius: 6,
  },
  connectButton: {
    backgroundColor: "transparent",
    border: "1px solid #4ea6ff",
    color: "#4ea6ff",
    fontWeight: "700",
    fontSize: "1rem",
    padding: "10px 24px",
    cursor: "pointer",
    borderRadius: 6,
  },
  socialIcons: {
    display: "flex",
    gap: 18,
  },
  iconLink: {
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageSection: {
    flex: "0 0 auto",
    maxWidth: 280,
    display: "flex",
    justifyContent: "center",
  },
  profileImage: {
    borderRadius: "50%",
    width: 250,
    height: 250,
    objectFit: "cover",
    boxShadow: "0 0 15px #2bdbd8",
  },
};

export default PortfolioLandingPage;