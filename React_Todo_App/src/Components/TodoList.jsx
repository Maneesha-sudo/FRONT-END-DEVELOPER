import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks, filter }) => {
  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.isCompleted;
    if (filter === "Completed") return task.isCompleted;
    return true;
  });

  // Sort by newest first
  const sortedTasks = [...filteredTasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <ul className="task-list">
      {sortedTasks.map((task) => (
        <TodoItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TodoList;
