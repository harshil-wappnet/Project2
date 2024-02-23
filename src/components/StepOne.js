// StepOne.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StepOne() {
  const navigate = useNavigate();

  const goToStepTwo = () => {
    navigate('/step-two');
  };

  return (
    <div>
      <h2>Step One</h2>
      <button onClick={goToStepTwo}>Next</button>
    </div>
  );
}

export default StepOne;
