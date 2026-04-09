import React, { useState, useEffect } from 'react';
import API from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // CSS file import karna zaroori hai

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await API.get('/tasks');
      setTasks(data);
    } catch (err) {
      setError("Backend se connect nahi ho pa raha. Check karo server chal raha hai ya nahi!");
    } finally {
      setLoading(false);
    }
  };

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app-container">
      <h2>Task Manager</h2>
      
      {/* Error handling as per PDF requirements */}
      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</div>}
      
      <TaskForm onTaskAdded={handleTaskAdded} />
      
      {loading ? (
        <p className="loading-text">Fetching tasks...</p>
      ) : (
        <TaskList tasks={tasks} setTasks={setTasks} />
      )}

      <div className="footer-info" style={{ marginTop: '20px', textAlign: 'center', color: '#888', fontSize: '14px' }}>
        Total Tasks: {tasks.length}
      </div>
    </div>
  );
}

export default App;