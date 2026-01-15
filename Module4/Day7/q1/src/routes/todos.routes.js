const express = require("express");
const fs = require("fs");
const path = require("path");

const rateLimiterMiddleware = require("../middleware/rateLimiter.middleware");
const validateTodoMiddleware = require("../middleware/validateTodo.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

// Helper function to read DB
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

// Helper function to write DB
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Create Todo
router.post("/add", validateTodoMiddleware, (req, res) => {
  const todos = readDB();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: req.body.title
  };
  todos.push(newTodo);
  writeDB(todos);
  res.status(201).json(newTodo);
});

// Get all Todos
router.get("/", rateLimiterMiddleware, (req, res) => {
  const todos = readDB();
  res.json(todos);
});

// Get single Todo
router.get("/:todoId", (req, res) => {
  const todos = readDB();
  const todo = todos.find(t => t.id === parseInt(req.params.todoId));
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const todos = readDB();
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.todoId));
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos[todoIndex].title = req.body.title || todos[todoIndex].title;
  writeDB(todos);
  res.json(todos[todoIndex]);
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const todos = readDB();
  const filteredTodos = todos.filter(t => t.id !== parseInt(req.params.todoId));
  if (todos.length === filteredTodos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }
  writeDB(filteredTodos);
  res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
