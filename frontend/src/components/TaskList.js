import React from 'react';
import API from '../api';

const TaskList = ({ tasks, setTasks }) => {
  const handleToggle = async (id) => {
    try {
      const { data } = await API.patch(`/tasks/${id}`);
      setTasks(tasks.map(t => t.id === id ? data : t));
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) { console.error(err); }
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <div className="task-content" onClick={() => handleToggle(task.id)}>
            <input 
              type="checkbox" 
              className="task-checkbox"
              checked={task.completed} 
              readOnly 
            />
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </span>
          </div>
          <button className="delete-btn" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default TaskList;