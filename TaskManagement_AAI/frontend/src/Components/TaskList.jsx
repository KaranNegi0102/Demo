// src/components/TaskList.jsx
import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ title, tasks }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
