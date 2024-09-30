// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Reflections from './pages/Reflections/Reflections';
import Research from './pages/Research/Research';
import Library from './pages/Library/Library';
import Contact from './pages/Contact/Contact';
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/research" element={<Research />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
