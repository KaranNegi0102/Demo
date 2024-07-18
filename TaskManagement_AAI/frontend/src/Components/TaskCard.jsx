// src/components/TaskCard.jsx
import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className={`priority ${task.priority.toLowerCase()}`}>
        {task.priority} PRIORITY
      </div>
      <h3>{task.title}</h3>
      <p>{task.date}</p>
      <p>{task.description}</p>
      <div className="footer">
        <button>Add Subtask</button>
        <button>...</button>
      </div>
    </div>
  );
};

export default TaskCard;
