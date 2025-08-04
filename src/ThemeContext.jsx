import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { themes } from "./theme-config";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  const changeTheme = (name) => {
    if (themes[name]) setThemeName(name);
  };

  const currentTheme = themes[themeName];
  // 👉 Update the <html> tag class when theme changes
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light-theme", "dark-theme");

    if (themeName === "dark") {
      html.classList.add("dark-theme");
    } else {
      html.classList.add("light-theme");
    }
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      <ConfigProvider theme={currentTheme}>
        <div
          style={{
            backgroundColor: currentTheme.token.colorBgBase,
            color: currentTheme.token.colorTextBase,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
