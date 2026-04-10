Task Manager Application (MERN Stack)
A simple, clean, and functional Task Manager application built as part of a Full Stack Developer Technical Assignment. This project is designed to assess core frontend and backend fundamentals.

🚀 Features

View Tasks: Display a list of all current tasks.

Add Tasks: Create new tasks using a simple form.

Toggle Status: Mark tasks as completed or incomplete.

Delete Tasks: Remove tasks from the list.

Loading & Error States: Visual feedback during API calls.

🛠️ Technical Stack

Frontend: React.js with Axios for API integration.

Backend: Node.js and Express.

Storage: In-memory data storage (as allowed for this exercise).

📦 Installation & Setup
1. Backend Setup
Navigate to the backend directory and start the server:

Bash
cd backend
npm install
node server.js
The server will run on http://localhost:5000.

2. Frontend Setup
Navigate to the frontend directory and start the React app:

Bash
cd frontend
npm install
npm start
The app will open on http://localhost:3000.

📝 Assumptions & Trade-offs

Time Constraint: The project was completed within the suggested 1-2 hour duration.


In-Memory Storage: To focus on API design and clean structure within the time limit, in-memory storage was used instead of a database.


Data Persistence: As per the trade-off, data will reset if the backend server restarts.


Simple UI: Focused on functionality and readable code rather than advanced styling.

📊 Data Model

id: Unique identifier 
title: Task description 
completed: Boolean status 
createdAt: Timestamp of creation
