import React, { useEffect } from "react";
import { Layout, Menu, notification } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import useToken from "antd/es/theme/useToken";
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
import CircleDesign from "./pages/CircleDesign";
const { Header, Content, Footer, Sider } = Layout;

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
  console.log("Current Theme:", themeName, currentTheme);
  console.log("Ant Design Token =====:", token.layoutHeaderBg);
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
    <CircleDesign/>
    </div>
  );
};

export default App;
