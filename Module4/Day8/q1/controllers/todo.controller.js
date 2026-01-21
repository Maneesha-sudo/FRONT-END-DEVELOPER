import { readDB, writeDB } from '../models/todo.model.js';


export const getTodos = (req, res) => {
try {
const db = readDB();
res.status(200).json(db.todos);
} catch (err) {
res.status(500).json({ message: 'Failed to fetch todos' });
}
};


export const createTodo = (req, res) => {
try {
const db = readDB();
const todo = { id: Date.now(), ...req.body, completed: false };
db.todos.push(todo);
writeDB(db);
res.status(201).json(todo);
} catch (err) {
res.status(500).json({ message: 'Failed to create todo' });
}
};


export const updateTodo = (req, res) => {
try {
const { id } = req.params;
const db = readDB();
const todo = db.todos.find(t => t.id == id);
if (!todo) return res.status(404).json({ message: 'Todo not found' });


Object.assign(todo, req.body);
writeDB(db);
res.status(200).json(todo);
} catch (err) {
res.status(500).json({ message: 'Failed to update todo' });
}
};


export const deleteTodo = (req, res) => {
try {
const { id } = req.params;
const db = readDB();
const index = db.todos.findIndex(t => t.id == id);
if (index === -1) return res.status(404).json({ message: 'Todo not found' });


db.todos.splice(index, 1);
writeDB(db);
res.status(200).json({ message: 'Todo deleted successfully' });
} catch (err) {
res.status(500).json({ message: 'Failed to delete todo' });
}
};