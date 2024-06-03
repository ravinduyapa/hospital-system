import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import './PayFromCash.css'; // Import your CSS file

const PayFromCash = () => {
  const [amount, setAmount] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCheckout = () => {
    // Generate PDF with details
    const doc = new jsPDF();
    doc.text(`Amount: ${amount}`, 10, 10);
    doc.text(`Date: ${dateTime}`, 10, 20);
    

    // Save the PDF
    doc.save('payment_details.pdf');
  };

  return (
    <div className="pay-from-cash-container">
      <h1 className="title">Pay From Cash</h1>
      <div className="input-group">
        <label htmlFor="amount">Enter the Amount:</label>
        <input type="text" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="input-group">
        <label htmlFor="datetime">Date and Time:</label>
        <input type="datetime-local" id="datetime" value={dateTime} onChange={handleDateTimeChange} />
      </div>
      <div className="input-group">
        <label htmlFor="doctorName">Doctor Name:</label>
        <input type="text" id="doctorName" />
      </div>
      <div className="button-group">
        <button className="checkout-btn" style={{background:'orange'}} onClick={handleCheckout}>Checkout</button>
      </div>
      <div className="button-group">
        <Link to="/view-appointment"><button className="back-btn">Back</button></Link>
      </div>
    </div>
  );
};

export default PayFromCash;
