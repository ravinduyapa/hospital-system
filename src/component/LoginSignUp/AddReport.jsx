// AddReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import './AddReport.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const AddReport = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [result, setResult] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); // Initialize useHistory for navigation

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/patient/get-all-appointment');
        setAppointments(response.data.data); // Assuming the API response contains data property with appointments array
      } catch (error) {
        console.error('Error fetching appointments:', error);
        // Handle error state or show error message to the user
      }
    };

    fetchAppointments();

    return () => {
      // Cleanup tasks if needed
    };
  }, []);

  useEffect(() => {
    // Filter appointments based on searchValue (NIC)
    if (searchValue.trim() !== '') {
      const filtered = appointments.filter(appointment => appointment.nic.includes(searchValue.trim()));
      setFilteredAppointments(filtered);
    } else {
      setFilteredAppointments(appointments);
    }
  }, [searchValue, appointments]);

  const handleResultClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPopup(true);
  };

  const handlePositiveClick = async () => {
    setResult('Positive');
    generatePDF();
    setShowPopup(false);
  };

  const handleNegativeClick = async () => {
    setResult('Negative');
    generatePDF();
    setShowPopup(false);
  };

  const generatePDF = () => {
    if (!selectedAppointment) return;
  
    const doc = new jsPDF();
  
    doc.text('Appointment Details', 10, 10);
    doc.text(`ID: ${selectedAppointment.id}`, 10, 20);
    doc.text(`Name: ${selectedAppointment.name}`, 10, 30);
    doc.text(`Test Name: ${selectedAppointment.test_Name}`, 10, 40);
    doc.text(`Doctor Name: ${selectedAppointment.doctorName}`, 10, 50);
    doc.text(`Date: ${new Date(selectedAppointment.date).toLocaleDateString()}`, 10, 60);
    doc.text(`Time: ${new Date(selectedAppointment.date).toLocaleTimeString()}`, 10, 70);
    doc.text(`Result: ${result}`, 10, 80); // Use the updated result from the state
  
    doc.save('appointment_report.pdf');
  };

  const handleBackToMenu = () => {
    navigate('/super-admin-menu'); // Navigate to /super-admin-menu when the button is clicked
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontSize: '72px', marginBottom: '30px' }}>Add Reports</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by NIC"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
      />

      <table>
        {/* Table headers and appointments mapping */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>NIC</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Test Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.age}</td>
              <td>{appointment.nic}</td>
              <td>{appointment.address}</td>
              <td>{appointment.mobileNumber}</td>
              <td>{appointment.test_Name}</td>
              <td>{appointment.doctorName}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{new Date(appointment.date).toLocaleTimeString()}</td>
              <td><button className="result-btn" onClick={() => handleResultClick(appointment)}>Result</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for result selection */}
      {showPopup && (
        <div className="popup">
          <div className="popup-header">
            <h2>Choose Result</h2>
            <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>
          </div>
          <div className="popup-content">
            <button onClick={handlePositiveClick}>Positive</button>
            <button onClick={handleNegativeClick}>Negative</button>
          </div>
        </div>
      )}

      <div className="bottom-left-container">
        <button className="back-to-menu-btn" onClick={handleBackToMenu}>Back to Menu</button>
      </div>
    </div>
  );
};

export default AddReport;
