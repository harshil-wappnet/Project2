// StepTwo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StepTwo() {
    const navigate = useNavigate();

    const goToStepThree = () => {
        navigate('/step-three');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>Step Two</h2>
            <button onClick={goBack}>Back</button>
            <button onClick={goToStepThree}>Next</button>
        </div>
    );
}

export default StepTwo;
