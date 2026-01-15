const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils");

// Create User
router.post("/add", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email required" });

  const db = readDB();
  const id = Date.now();
  db.users.push({ id, name, email });
  writeDB(db);

  res.status(201).json({ message: "User added", user: { id, name, email } });
});

// Get All Users
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// Get Single User
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id == req.params.userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Update User
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id == req.params.userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  writeDB(db);
  res.json({ message: "User updated", user });
});

// Delete User
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id == req.params.userId);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  const deleted = db.users.splice(index, 1);
  writeDB(db);
  res.json({ message: "User deleted", user: deleted[0] });
});

module.exports = router;
