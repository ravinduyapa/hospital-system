import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import './PayFromCreditCard.css'; // Import your CSS file

const PayFromCreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvc, setCVC] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCVC(e.target.value);
  };

  const handleCheckout = () => {
    // Save the PDF
    const doc = new jsPDF();
    doc.save('payment_details.pdf');
  };

  return (
    <div className="pay-from-credit-card-container">
      <h1 className="title">Pay From Credit Card</h1>

      <div className="input-group">
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="cardHolderName">Card Holder's Name:</label>
        <input
          type="text"
          id="cardHolderName"
          value={cardHolderName}
          onChange={handleCardHolderNameChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="cvc">CVC:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={handleCVCChange}
        />
      </div>

      <div className="button-group">
        <button className="checkout-btn" style={{background:'orange'}} onClick={handleCheckout}>Checkout</button>
      </div>

      <div className="button-group">
        <Link to="/view-appointment">
          <button className="back-btn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default PayFromCreditCard;
