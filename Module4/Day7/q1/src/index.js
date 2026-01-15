const express = require("express");
const loggerMiddleware = require("./middleware/logger.middleware");
const todoRouter = require("./routes/todos.routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/todos", todoRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
