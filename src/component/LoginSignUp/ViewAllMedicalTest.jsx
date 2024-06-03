import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewAllMedicalTest.css'; // Import CSS file

const ViewAllMedicalTest = () => {
  const [tests, setTests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/test/get-all-tests');
      setTests(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (testId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/test/delete-test-by-id?id=${testId}`);
      setTests(tests.filter(test => test.testId !== testId));
      console.log(`Test ID ${testId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const results = tests.filter(test => test.testName.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  };

  return (
    <div className="container">
      <div>
          <h1 style={{ fontSize: '72px' }}>All Medical Tests</h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by test name"
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Test ID</th>
            <th>Doctor Name</th>
            <th>Test Name</th>
            <th>Test Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(searchTerm ? searchResults : tests).map(test => (
            <tr key={test.testId}>
              <td>{test.testId}</td>
              <td>{test.doctorName}</td>
              <td>{test.testName}</td>
              <td>{test.testPrice}</td>
              <td><button onClick={() => handleDelete(test.testId)} className="delete-button">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="back-button-container">
        <Link to="/super-admin-menu">
          <button className="action-button blue-button">Back to Main</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewAllMedicalTest;
