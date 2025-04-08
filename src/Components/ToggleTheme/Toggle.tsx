import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <span
      className="toggle-theme btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    >
      {theme === 'light' ? <FaMoon className="fa" /> : <FaSun className="fa" />}
    </span>
  );
};

export default ToggleTheme;
