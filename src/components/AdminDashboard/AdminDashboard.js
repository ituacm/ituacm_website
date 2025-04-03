import React from "react";
import { logout } from "../../api/auth";
import "./AdminDashboard.css";
import { Outlet, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <button onClick={() => navigate("events")}>Events Dashboard</button>
      <button onClick={() => navigate("courses")}>Courses Dashboard</button>
      <button onClick={() => navigate("board-members")}>
        Board Members Dashboard
      </button>
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
