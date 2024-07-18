import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx"; // Import Navbar if needed

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(""); // State to track selected user

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users"); // Endpoint to fetch users
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  const handleSelectUser = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div>
      <header>
        <Navbar /> {/* Include Navbar if needed */}
      </header>
      <div className="container">
        <h1>View Users</h1>
        <div className="dropdown-container">
          <select value={selectedUser} onChange={handleSelectUser}>
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        {selectedUser && (
          <div className="selected-user">
            <p>Selected User: {selectedUser}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewUsers;
