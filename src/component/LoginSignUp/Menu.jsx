import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css'; // Import your CSS file

const Menu = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="menu-container">
      <div className="menu-links">
        <Link to="/add-patient"><button className="green-button big-button">Add Appointment</button></Link>
        <Link to="/view-appointment"><button className="green-button big-button">View All Appointments</button></Link>
      </div>
      <div className="logout-container">
        <button onClick={handleLogout} className="red-button">Logout</button>
      </div>
    </div>
  );
};

export default Menu;
