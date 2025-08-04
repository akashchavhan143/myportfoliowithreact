// import React, { useState } from "react";
// import { Menu, Button, Drawer, List, Badge, Select } from "antd";
// import { Link, useLocation } from "react-router-dom";
// import { BellOutlined, MenuOutlined } from "@ant-design/icons";
// import { useTheme } from "../ThemeContext";



// const themeOptions = [
//    "dark",
//   "light",
 
//   "green",
//   "pink",
//   "ocean",
//   "sunset",
//   "forest",
//   "midnight",
//   "lemon",
//   "royal",
// ];

// const Navbar = () => {
//   const location = useLocation();
//   const { themeName, changeTheme } = useTheme();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const showDrawer = () => setDrawerOpen(true);
//   const closeDrawer = () => setDrawerOpen(false);

//   return (
//     <>
//     {/* Menu icon button */}
//       <Button
//         icon={<MenuOutlined />}
//         type="text"
//         onClick={showDrawer}
//         style={{ fontSize: '24px', color: '#fff', position: 'absolute', top: '16px', right: '16px' }}
//       />
//       <Menu
//         mode="horizontal"
//         selectedKeys={[location.pathname]}
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           height: "64px",
//           paddingInline: "16px",
//           backgroundColor: "var(--ant-menu-bg)", // Use CSS variable for background
//         }}
//         className=""
//       >
//  <div style={{ display: "flex", gap: "12px" }}>
//   <Menu.Item key="home">
//     <a href="#home1">Home</a>
//   </Menu.Item>
//   <Menu.Item key="Events">
//     <a href="#Events">Events</a>
//   </Menu.Item>
//   <Menu.Item key="about">
//     <a href="#about">About</a>
//   </Menu.Item>
//   <Menu.Item key="contact">
//     <a href="#contact">Contact</a>
//   </Menu.Item>
// </div>


//         {/* Right Actions */}
//         <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
     

//           {/* Theme Selector */}
//           <Select
//             value={themeName}
//             onChange={changeTheme}
//             options={themeOptions.map((theme) => ({
//               label: theme.charAt(0).toUpperCase() + theme.slice(1),
//               value: theme,
//             }))}
//             style={{ width: 100 }}
//             size="small"
//           />
//         </div>
//       </Menu>

//    {/* Right Drawer */}
//       <Drawer
//         title="Menu"
//         placement="right"
//         onClose={closeDrawer}
//         open={drawerOpen}
//         width={300}
//       >
//         {/* Navigation Menu inside Drawer */}
//         <Menu mode="vertical" items={[
//     { key: '1', label: <a href="#about">About</a> },
//     { key: '2', label: <a href="#projects">Projects</a> },
//     { key: '3', label: <a href="#skills">Skills</a> },
//     { key: '4', label: <a href="#contact">Contact</a> },
//   ]} />
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Select, Switch } from "antd";
import { useLocation } from "react-router-dom";
import { BulbFilled, BulbOutlined, MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../ThemeContext";
import { themes } from "../theme-config"; // Import your theme object
const themeOptions = [
  "dark", "light",
];

const Navbar = () => {
  const location = useLocation();
  const { themeName, changeTheme } = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const currentTheme = themes[themeName];
  const token = currentTheme?.token || {};
  // Responsive screen check
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu items (reuse in both menu & drawer)
  const navItems = [
    { key: "home", label: <a href="#home1">Home</a> },
    { key: "events", label: <a href="#Events">Events</a> },
      { key: "skills", label: <a href="#skills">Skills</a> },
    { key: "about", label: <a href="#about">About</a> },
        { key: "projects", label: <a href="#projects">Projects</a> },
    { key: "contact", label: <a href="#contact">Contact</a> },
  ];
  const handleThemeChange = () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }
  return (
    <>
      {/* Top Fixed Navbar */}
      <div
        style={{
          position: "sticky",
          width: "100%",
          top: 0,
          zIndex: 1000,
          background: token.layoutHeaderBg,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
            height: "64px",
          }}
        >
          {/* Left - Logo or Title */}
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>MYPORTFOLIO</div>

          {/* Middle - Menu (hidden on mobile) */}
          {!isMobile && (
            <Menu
            
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={navItems}
              style={{ flex: 1, justifyContent: "center",borderBottom: "none", // removes the bottom border
              boxShadow: "none", background:"transparent" }} // makes the background transparent
            />
          )}

          {/* Right - Theme & Drawer toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
           
          <Button onClick={handleThemeChange}>{themeName=="dark"?"light":"dark"}</Button>
         
            {/* Menu Toggle Button (only on mobile) */}
            {isMobile && (
              <Button
                icon={<MenuOutlined />}
                type="text"
                onClick={showDrawer}
                style={{ fontSize: "24px",}}
              />
            )}
          </div>
        </div>
            {/* Drawer for mobile navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerOpen}
        width={200}
      >
        <Menu mode="vertical" items={navItems} onClick={closeDrawer} />
      </Drawer>
      </div>

        {/* {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )} */}

    
    </>
  );
};

export default Navbar;
