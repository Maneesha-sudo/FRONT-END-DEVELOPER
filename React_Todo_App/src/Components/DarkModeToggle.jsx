import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="dark-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
