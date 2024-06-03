import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddMedicalTest.css'; // Import CSS file

const AddmedicalTest = () => {
  const [testName, setTestName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [testPrice, setTestPrice] = useState('');

  const handleAddTest = async () => {
    // Check if any of the input fields are empty
    if (testName.trim() === '' || doctorName.trim() === '' || testPrice.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/test/test', {
        testName,
        doctorName,
        testPrice,
      });
      console.log(response.data); // Log the response from the backend
      alert('Medical test added successfully'); // Show alert for successful addition
      // Clear input fields after successful addition
      setTestName('');
      setDoctorName('');
      setTestPrice('');
    } catch (error) {
      console.error('Error adding medical test:', error);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '72px' }}>Add Medical Test and Price</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Test Name"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          className="input-field"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="input-field"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Test Price"
          value={testPrice}
          onChange={(e) => setTestPrice(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="btn-container">
        <button type="button" onClick={handleAddTest} className="btn">
          Add Medical Test
        </button>
      </div>

      <div className="back-btn-container">
        <Link to="/super-admin-menu" className="link-btn">
          <button className="back-btn">Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default AddmedicalTest;
