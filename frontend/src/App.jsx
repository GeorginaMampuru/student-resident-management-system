import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn, Dashboard, Administration } from './containers';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} /> {/* Set SignIn component as the first page */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/administration" element={<Administration />} />
    </Routes>
  </Router>
);

export default App;
