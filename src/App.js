// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WhatAreWe from './components/WhatAreWe';

function App() {
  return (
    // <div className="App">
    //   <LandingPage />
     
    // </div>
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
