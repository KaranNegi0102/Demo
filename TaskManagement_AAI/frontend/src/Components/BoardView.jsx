// src/components/BoardView.jsx
import React from "react";
import TaskList from "./TaskList";
import { tasks  } from "../assests/data"; // Ensure you have a data.js file with sample tasks

const BoardView = () => {
  const todoTasks = tasks.filter(task => task.status === "todo");
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");
  const completedTasks = tasks.filter(task => task.status === "completed");

  return (
    <div className="board-view">
      <TaskList title="To Do" tasks={todoTasks} />
      <TaskList title="In Progress" tasks={inProgressTasks} />
      <TaskList title="Completed" tasks={completedTasks} />
    </div>
  );
};

export default BoardView;
