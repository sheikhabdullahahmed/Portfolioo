import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme: React.FC = () => {
  // Explicitly define the type for the state (either "light" or "dark")
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) || "light" : "light"
  );

  useEffect(() => {
    // Apply dark theme class to the document if the theme is dark
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme preference in localStorage
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
