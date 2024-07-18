// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaClipboardList, FaTrash } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">TaskMe</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <FaTasks /> Tasks
            </Link>
          </li>
          <li>
            <Link to="/completed">
              <FaClipboardList /> Completed
            </Link>
          </li>
          <li>
            <Link to="/team">
              <IoMdPeople /> Team
            </Link>
          </li>
          <li>
            <Link to="/trash">
              <FaTrash /> Trash
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;


