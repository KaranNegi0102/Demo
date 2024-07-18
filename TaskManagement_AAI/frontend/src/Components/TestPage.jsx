// src/components/TestPage.jsx
import React from "react";
import BoardView from "./BoardView";
import CreateTaskButton from "./CreateTaskButton";
import Sidebar from "./Sidebar";

const TestPage = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <header>
          <h1>Tasks</h1>
          <div className="view-switch">
            <button className="active">Board View</button>
            <button>List View</button>
          </div>
          <CreateTaskButton />
        </header>
        <BoardView />
      </main>
    </div>
  );
};

export default TestPage;
