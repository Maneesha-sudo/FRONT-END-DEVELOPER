const express = require("express");
const usersRouter = require("./routes/users.routes");
const todosRouter = require("./routes/todos.routes");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Express CRUD API! Use /users or /todos to interact.");
});

// Use routers
app.use("/users", usersRouter);
app.use("/todos", todosRouter);

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
