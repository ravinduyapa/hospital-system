import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddSuperAdmin.css'; // Import the CSS file

const SuperAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="super-admin-container">
      <div className="super-admin-buttons">
        <Link to="/super-admin-add-medical-test" className="super-admin-link">
          <button className="super-admin-btn">Add Medical Test</button>
        </Link>
        <Link to="/super-admin-view-all-medical-test" className="super-admin-link">
          <button className="super-admin-btn">View All Medical Tests</button>
        </Link>
        <Link to="/super-admin-report" className="super-admin-link">
          <button className="super-admin-btn">Add Report</button>
        </Link>
      </div>
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default SuperAdmin;
