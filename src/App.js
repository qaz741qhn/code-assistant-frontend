import React from 'react';
import CodeForm from './CodeForm';
import CodeConverter from './CodeConverter';
import Header from './Header';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/generator" element={<CodeForm />} />
          <Route path="/converter" element={<CodeConverter />} />
          <Route path="/" element={<CodeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
