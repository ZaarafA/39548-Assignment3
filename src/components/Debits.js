/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

const NewDebitForm = ({ addDebit }) => {
  const [newDebitDescr, setNewDebitDesc] = useState('');
  const [newDebitValue, setNewDebitValue] = useState('');

  // Input Event Handlers
  const handleDescChange = (e) => {
    setNewDebitDesc(e.target.value);
  };
  const handleValueChange = (e) => {
    setNewDebitValue(e.target.value);
  };

  // Handle Added Debit. Creates object and then passes it to AddDebit
  const handleAddDebit = () => {
    const newDebit = {
      description: newDebitDescr,
      amount: parseFloat(newDebitValue),
      date: new Date().toISOString().slice(0, 10),
    };
    addDebit(newDebit);
    setNewDebitDesc('');
    setNewDebitValue('');
  };

  // Debit Input Form
  return(
    <div className="new-credit-form">
      <h2>Add New Debit</h2>
      <input
        type="text"
        placeholder="Description"
        value={newDebitDescr}
        onChange={handleDescChange}
        className="debit-input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={newDebitValue}
        onChange={handleValueChange}
        className="debit-input"
      />
      <button onClick={handleAddDebit} className="add-debit-button">CLICK</button>
    </div>
  )
}

// Display Current List of Debits
const DebitList = ({ debits }) => (
  <div className="debit-list">
    <h2>Debits List</h2>
    <ul>
      {debits.map((debit, index) => (
        <li key={index} className="debit-item">
          Description: {debit.description}, Amount: {debit.amount.toFixed(2)}, Date: {debit.date}
        </li>
      ))}
    </ul>
  </div>
);

// Main Page Render
const Debits = ({ debits, addDebit }) => {
  return (
    <div>
      <h1>Debits</h1>
      <NewDebitForm addDebit={addDebit} />
      <DebitList debits={debits} />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;