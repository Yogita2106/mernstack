import React, { useState } from 'react';
import API from '../api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const { data } = await API.post('/tasks', { title });
      onTaskAdded(data);
      setTitle('');
    } catch (err) {
      alert("Task add nahi ho paya!");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        className="task-input"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new task..." 
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};
export default TaskForm;