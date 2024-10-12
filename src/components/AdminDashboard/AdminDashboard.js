import React from "react";
import { logout } from "../../api/auth";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <div className="admin-dashboard">
      <p>Admin Dashboard</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
