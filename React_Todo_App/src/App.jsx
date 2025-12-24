import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import DarkModeToggle from './components/darkModeToggle';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <h1>Todo App</h1>

        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <TodoInput tasks={tasks} setTasks={setTasks} />

        <Filter filter={filter} setFilter={setFilter} />

        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;
