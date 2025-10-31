import React, { useEffect } from "react";
import { Layout, Menu, notification } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


import { themes } from "./theme-config"; // Import your theme object
import { useTheme } from "./ThemeContext";
import Home1 from "./pages/Home1";
import SkillsSection from "./pages/Skills";
import "./App.css"; // Import your main CSS file
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Event from "./pages/Event";
import Navigation from "./components/Navigation";
import Certifications from "./pages/Certifications";
import Footer from "./pages/Footer";
import AnimatedCard from "./Demo/AnimatedCard";
import DemoSection from "./Demo/DemoSection";
import DeveloperLandingPage from "./Demo/DeveloperLandingPage";
import PortfolioLandingPage from "./Demo/PortfolioLandingPage";

import { HomeOutlined, UserOutlined, ProjectOutlined, ReadOutlined, StarOutlined, CalendarOutlined, MailOutlined } from "@ant-design/icons";

const navItemsForBottom = [
  { href: "#home", icon: <HomeOutlined /> },
  { href: "#about", icon: <UserOutlined /> },
  { href: "#projects", icon: <ProjectOutlined /> },
  { href: "#skills", icon: <ReadOutlined /> },
  { href: "#certifications", icon: <StarOutlined /> },
  { href: "#events", icon: <CalendarOutlined /> },
  { href: "#contact", icon: <MailOutlined /> },
];

const App = () => {
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark-theme");

    notification.config({
      placement: "topRight",
      getContainer: () => {
        const container = document.createElement("div");
        container.className = isDark
          ? "custom-notification-container dark-mode"
          : "custom-notification-container light-mode";
        document.body.appendChild(container);
        return container;
      },
    });
  }, []);
  const { themeName } = useTheme();
  const currentTheme = themes[themeName];
  const token = currentTheme?.token || {};
  return (
<div> 
     <Navigation />
    <div className="main-container">
      {/* Top Navbar */}
     
      {/* <Navbar /> */}
      <Home1 />
      <About />
      <Projects />
      <SkillsSection />
      <Certifications/>
      <Event />
      <Contact />
    </div>
    <Footer /> 

    </div>
  );
};

export default App;
