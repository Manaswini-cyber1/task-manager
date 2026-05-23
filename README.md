markdown
# ✅ TaskFlow - Task Management Web Application

A full-stack task management web application with beautiful dashboard, real-time analytics, interactive graphs, and complete CRUD operations.

---

## 📌 Features

- User Login & Signup
- Add New Tasks
- Mark Tasks Complete (with checkbox)
- Delete Tasks
- Live Statistics (Total, Completed, Pending)
- Interactive Graphs (Donut Chart)
- Filter Tasks (All / Pending / Completed)
- Password Show/Hide Toggle
- Responsive Design

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Charts | Chart.js |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /task | Create new task |
| PUT | /task/:id | Update task status |
| DELETE | /task/:id | Delete task |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed and running

**Step 1:** Install Backend Dependencies
bash
cd backend
npm install

Step 2: Start MongoDB

bash
mongod --dbpath C:\data\db

Step 3: Start Backend Server

bash
node server.js
Step 4: Open Dashboard

Open dashboard.html in your browser

📁 Project Structure
text
task-manager/
├── index.html          # Login/Signup page
├── dashboard.html      # Main dashboard with graphs
├── backend/
│   ├── server.js       # Node.js backend API
│   └── package.json    # Dependencies
└── README.md           # This file

SCREENSHOTS HERE-https://drive.google.com/drive/folders/120OOEaZX3CGXxckvmrfExwT3LfHMh_Fe?usp=sharing

