import React, { useState } from "react";

const TodoInput = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        isCompleted: false,
        createdAt: new Date(),
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TodoInput;
