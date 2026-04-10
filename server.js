const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/taskdb")
.then(() => console.log("✅ Database connected successfully!"))
.catch(err => console.log("❌ Database error:", err.message));

// Task Schema
const Task = mongoose.model("Task", {
    text: String
});

// Add Task
app.post("/task", async (req, res) => {
    try {
        const task = new Task({ text: req.body.text });
        await task.save();
        res.json({ message: "Task added", task });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Tasks
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Task
app.delete("/task/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});