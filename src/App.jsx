import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import VideoCall from './VideoCall';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/call" element={<VideoCall />} />
    </Routes>
  </Router>
);

export default App;