import React, { useState } from "react";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Add note
  const addNote = () => {
    if (noteText.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text: noteText }]);
    setNoteText("");
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  };

  // Start editing
  const startEditing = (note) => {
    setEditingId(note.id);
    setEditingText(note.text);
  };

  // Save edited note
  const saveEdit = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: editingText } : note
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>My Notes App</h1>

      {/* Input to add new note */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={addNote} style={{ padding: "10px 20px" }}>
          Add
        </button>
      </div>

      {/* Notes list */}
      {notes.length === 0 ? (
        <p style={{ textAlign: "center" }}>No notes yet!</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {editingId === note.id ? (
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                style={{ flex: 1, marginRight: "10px", padding: "5px" }}
              />
            ) : (
              <span>{note.text}</span>
            )}

            <div>
              {editingId === note.id ? (
                <button
                  onClick={() => saveEdit(note.id)}
                  style={{ marginRight: "5px" }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(note)}
                  style={{ marginRight: "5px" }}
                >
                  Edit
                </button>
              )}
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesApp;
