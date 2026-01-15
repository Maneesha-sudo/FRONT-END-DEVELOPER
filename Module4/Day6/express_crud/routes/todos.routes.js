const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils");

// Create Todo
router.post("/add", (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ error: "Title required" });

  const db = readDB();
  const id = Date.now();
  db.todos.push({ id, title, completed });
  writeDB(db);

  res.status(201).json({ message: "Todo added", todo: { id, title, completed } });
});

// Get All Todos
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id == req.params.todoId);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id == req.params.todoId);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  const { title, completed } = req.body;
  if (title) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  writeDB(db);
  res.json({ message: "Todo updated", todo });
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id == req.params.todoId);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = db.todos.splice(index, 1);
  writeDB(db);
  res.json({ message: "Todo deleted", todo: deleted[0] });
});

module.exports = router;
