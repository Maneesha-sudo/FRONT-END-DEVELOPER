import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Path to db.json
const dbPath = path.resolve("db.json");

// Helper function to read db.json
const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading db.json:", err.message);
    return [];
  }
};

// Helper function to write to db.json
const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing db.json:", err.message);
  }
};

// GET /students - fetch all students
app.get("/students", (req, res) => {
  const students = readDB();
  res.json(students);
});

// POST /students - add a new student
app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ error: "Please provide name, course, and year" });
  }

  const students = readDB();
  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    course,
    year,
  };

  students.push(newStudent);
  writeDB(students);

  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// PUT /students - update a student by id
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Please provide student id to update" });
  }

  const students = readDB();
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  // Update fields if provided
  if (name) students[index].name = name;
  if (course) students[index].course = course;
  if (year) students[index].year = year;

  writeDB(students);

  res.json({ message: "Student updated successfully", student: students[index] });
});

// DELETE /students/:id - delete a student by id
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const students = readDB();
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];
  writeDB(students);

  res.json({ message: "Student deleted successfully", student: deletedStudent });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
