// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import { Routes } from './navigation';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
