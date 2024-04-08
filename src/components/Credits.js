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

  const handleDescChange = (e) => {
    setNewCreditDesc(e.target.value);
  }
  const handleValueChange = (e) => {
    setNewCreditValue(e.target.value);
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