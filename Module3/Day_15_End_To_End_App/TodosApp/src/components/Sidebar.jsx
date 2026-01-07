import React from "react";

const Sidebar = ({ todos, selectedTodoId, onSelectTodo }) => {
  return (
    <aside className="sidebar">
      <h3>Todo List</h3>

      {todos.length === 0 && <p>No todos available</p>}

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.id === selectedTodoId ? "active" : ""}
            onClick={() => onSelectTodo(todo)}
          >
            {todo.title}
            {todo.completed && " ✅"}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
