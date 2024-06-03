// ViewAppointment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ViewAppointments.css'; // Import your CSS file

const ViewAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [initialAppointments, setInitialAppointments] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showPaymentWindow, setShowPaymentWindow] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/patient/get-all-appointment');
      setAppointments(response.data.data);
      setInitialAppointments(response.data.data);
      setShowBackButton(false);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/patient/delete-appointment-by-id?id=${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/patient/get-appointment-by-id?id=${searchTerm}`);
      setAppointments([response.data.data]);
      setShowBackButton(true);
    } catch (error) {
      console.error('Error searching appointment:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBack = () => {
    setSearchTerm('');
    setAppointments(initialAppointments);
    setShowBackButton(false);
  };

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setShowPaymentWindow(false);
    if (paymentMethod === 'Cash') {
      navigate('/pay-from-cash');
    }
    if (paymentMethod === 'Credit-Card') {
      navigate('/pay-from-credit-card');
    }
  };

  const PaymentWindow = ({ handleClose }) => (
    <div className="payment-window">
      <h3>Select Payment Method</h3>
      <button style={{background:'orange'}} onClick={() => handlePaymentSelection('Cash')}>Cash</button>
      <button style={{background:'yellow'}}onClick={() => handlePaymentSelection('Credit-Card')}>Credit Card</button>
      <button style={{background:'red'}}onClick={handleClose}>Close</button>
    </div>
  );

  return (
    <div className="container">
      {showPaymentWindow && <PaymentWindow handleClose={() => setShowPaymentWindow(false)} />}
      {!showPaymentWindow && (
        <div>
          <div>
            <h1 style={{ fontSize: '72px' }}>View Appointments</h1>
          </div>
          <input type="text" placeholder="Search by ID" value={searchTerm} onChange={handleChange} />
          <button style={{ backgroundColor: 'yellow' }} onClick={handleSearch}>
            Search
          </button>
          {showBackButton && <button onClick={handleBack} style={{ backgroundColor: 'orange' }}>Back</button>}
          <table>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.age}</td>
                <td>{appointment.nic}</td>
                <td>{appointment.address}</td>
                <td>{appointment.mobileNumber}</td>
                <td>{appointment.testName}</td> {/* Updated property name */}
                <td>{appointment.doctorName}</td>
                <td>
                  <button className="green-button" onClick={() => setShowPaymentWindow(true)}>
                    Pay
                  </button>
                  <button className="blue-button" style={{background:'red'}} onClick={() => handleDelete(appointment.id)}>
                    Delete
                  </button>
                </td>
              </tr>
))}

            </tbody>
          </table>
          <div className="back-to-main">
            <Link to="/menu">
              <button className="blue-button">Back to Main</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAppointment;
