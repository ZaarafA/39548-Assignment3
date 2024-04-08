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
    setNewCreditValue(e.target.value);
  }

  // Handle Added Credit. Creates object and then passes it to AddCredit
  const handleAddCredit = () => {
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

  return{
    
  }
}

const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;