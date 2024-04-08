/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewCreditForm = ({addCredit}) => {
  const [newCreditDesc, setNewCreditDesc] = useState('');
  const [newCreditValue, setNewCreditValue] = useState('');

  // Input Event Handlers. Update as user types
  const handleDescChange = (e) => {
    setNewCreditDesc(e.target.value);
  }
  const handleValueChange = (e) => {
    // Validate input is a number
    if(!isNaN(parseFloat(e.target.value))){
      setNewCreditValue(e.target.value);
    }
  }

  // Handle Added Credit. Creates object and then passes it to AddCredit
  const handleAddCredit = () => {
    if(!isNaN(parseFloat(newCreditValue))){
      const newCredit = {
        description: newCreditDesc,
        amount: parseFloat(newCreditValue),
        date: new Date().toISOString().slice(0,10),
      }
      addCredit(newCredit);
      // clear input fields
      setNewCreditDesc('');
      setNewCreditValue('');
    }
  };

  // Credit Input Form
  return(
    <div className="new-credit-form">
      <h2>Add New Credit</h2>
      <input
        type="text"
        placeholder="Description"
        value={newCreditDesc}
        onChange={handleDescChange}
        className="credit-input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={newCreditValue}
        onChange={handleValueChange}
        className="credit-input"
      />
      <button onClick={handleAddCredit} className="add-credit-button">CLICK</button>
    </div>
  )
}

// Display Current List of Credits
const CreditList = ({ credits }) => (
  <div className="credit-list">
    <h2>Credits List</h2>
    <ul>
      {credits.map((credit, index) => (
        <li key={index} className="credit-item">
          Description: {credit.description}, Amount:{' '}
          {credit.amount.toFixed(2)}, Date: {credit.date}
        </li>
      ))}
    </ul>
  </div>
);


const Credits = ({credits, addCredit}) => {
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <NewCreditForm addCredit={addCredit} />
      <CreditList credits={credits} />
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;