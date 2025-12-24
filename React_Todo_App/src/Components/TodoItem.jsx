import React, { useState } from "react";

const TodoItem = ({ task, tasks, setTasks }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Toggle complete
  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  // Delete task
  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  // Save edited task
  const saveEdit = () => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, text: editText } : t))
    );
    setEditing(false);
  };

  return (
    <li className="task-item">
      {editing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          {/* Task text with line-through if completed */}
          <span className={task.isCompleted ? "completed-text" : ""}>
            {task.text}
          </span>

          {/* Action buttons */}
          <div className="actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={deleteTask}>Delete</button>

            {/* Show Completed button only if task is not completed */}
            {!task.isCompleted && (
              <button onClick={toggleComplete}>Completed</button>
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
