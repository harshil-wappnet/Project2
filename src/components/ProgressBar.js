// ProgressBar.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProgressBar() {
    const location = useLocation();
    let progress = 0;

    switch (location.pathname) {
        case '/step-two':
            progress = 33;
            break;
        case '/step-three':
            progress = 66;
            break;
        default:
            progress = 0;
    }

    return (
        <div>
            <progress value={progress} max="100" />
        </div>
    );
}

export default ProgressBar;
