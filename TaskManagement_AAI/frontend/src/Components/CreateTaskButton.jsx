// src/components/CreateTaskButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateTaskButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addTask");
  };

  return (
    <button className="create-task-button" onClick={handleClick}>
      + Create Task
    </button>
  );
};

export default CreateTaskButton;
