import React from "react";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Settings;
