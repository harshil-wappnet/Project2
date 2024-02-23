// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import News from './components/News';
import Visited from './components/Visited';

function App() {
  return (
    <Router>
      <div>
        <ProgressBar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path="/step-one" element={<StepOne />} />
          <Route path="/step-two" element={<StepTwo />} />
          <Route path="/step-three" element={<StepThree />} />
          <Route path="/News" element={<News />} />
          <Route path="/visited" element={<Visited />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
