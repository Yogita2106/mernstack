const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // JSON parsing ke liye [cite: 20]

// In-memory Task Storage [cite: 31]
// Isme Task Data Model follow kiya hai: id, title, completed, createdAt 
let tasks = [
  { 
    id: "1", 
    title: "Complete Full Stack Assignment", 
    completed: false, 
    createdAt: new Date().toISOString() 
  }
];

// --- API Endpoints [cite: 23] ---

// 1. GET /tasks - Saare tasks return karne ke liye
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// 2. POST /tasks - Naya task create karne ke liye [cite: 13]
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  // Basic Validation 
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: "Title is required and must be a string." });
  }

  const newTask = {
    id: Date.now().toString(), // Unique identifier [cite: 25]
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. PATCH /tasks/:id - Task status update karne ke liye (Completed toggle) [cite: 14]
app.patch('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }

  // Task ka status toggle kar rahe hain
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  res.status(200).json(tasks[taskIndex]);
});

// 4. DELETE /tasks/:id - Task delete karne ke liye [cite: 15]
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: "Task not found." });
  }

  res.status(204).send(); // Success but no content to return
});

// Server Port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});