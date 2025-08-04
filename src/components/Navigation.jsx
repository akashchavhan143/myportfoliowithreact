// src/components/Navigation.js
import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import "../styles/Navigation.css";
import { useTheme } from "../ThemeContext";
import { Drawer, Menu } from "antd";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState("#home");
 const { themeName, changeTheme } = useTheme();
const handleThemeChange = () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 150;

    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href);
      return el ? { href: item.href, top: el.offsetTop } : null;
    }).filter(Boolean);

    const current = sections.reverse().find((s) => scrollPos >= s.top);
    if (current) setActiveSection(current.href);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#events", label: "Events" },
   
    { href: "#contact", label: "Contact" },
  ];
const navMenuItems = navItems.map((item) => ({
  key: item.href,
  label: (
    <a href={item.href} onClick={() => setIsOpen(false)}>
      {item.label}
    </a>
  ),
}));
  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
        PORTFOLIO
        </a>

        <div className="nav-items">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link ${activeSection === item.href ? "active" : ""}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={handleThemeChange}
          >
            {themeName === "light" ? <MoonOutlined /> : <SunOutlined />}
          </button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
             <MenuOutlined />
          </button>
        </div>
      </div>


        <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsOpen(!isOpen)}
        open={isOpen}
        width={200}
      >
        <Menu mode="vertical" items={navMenuItems} onClick={() => setIsOpen(!isOpen)}  style={{background:"transparent",border:"none"}} />
      </Drawer>
    </nav>
  );
};

export default Navigation;
