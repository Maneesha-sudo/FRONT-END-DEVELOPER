import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

const Child1 = () => {
  const { theme, setTheme } = useContext(ThemeContext);

const styless={
    backgroundColor: theme === "light" ? "#fff" : "#090707ff",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center"
};

  return (
    <div style={styless}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        theme
      </button>
    </div>
  );
};

export default Child1;
