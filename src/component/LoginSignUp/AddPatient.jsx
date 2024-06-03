import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Addpatient.css'; // Import your CSS file

const AddPatient = () => {
  const initialFormData = {
    name: '',
    age: '',
    nic: '',
    address: '',
    mobileNumber: '',
    test_name: '',
    doctorName: '',
    date: '',
    time: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/patient/add',
        formData
      );
      console.log(response.data);
      setFormData({ ...initialFormData });
      alert('Patient added successfully!');
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('Error adding patient. Please try again.');
    }
  };

  const handleClear = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <div className="container">
      <h1 className="header" style={{ fontSize: '72px' }}>Add Patient</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="nic"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="test_name"
            name="test_name"
            placeholder="Test Name"
            value={formData.test_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            placeholder="Doctor Name"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn add-patient">
          Add Patient
        </button>
        <button type="button" onClick={handleClear} className="btn clear">
          Clear
        </button>

      </form>
      <div className="back-to-main">
        <Link to="/menu">
          <button className="btn">Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default AddPatient;
