// StepThree.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StepThree() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>Step Three</h2>
            <button onClick={goBack}>Back</button>
        </div>
    );
}

export default StepThree;
