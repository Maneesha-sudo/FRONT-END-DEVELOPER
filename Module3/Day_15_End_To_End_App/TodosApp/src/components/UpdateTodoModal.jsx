import React, { useState } from "react";

const UpdateTodoModal = ({ todo, onClose, onSave }) => {
  const [title, setTitle] = useState(todo.title);

  function handleSave() {
    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }
    onSave({ ...todo, title });
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit Todo</h3>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoModal;
