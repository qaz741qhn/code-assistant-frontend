import React from 'react';
import CodeForm from './CodeForm';
import CodeConverter from './CodeConverter';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const apiURL = "https://multi-api.herokuapp.com";
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
          <Routes>
            <Route path="/generator" element={<CodeForm apiURL={apiURL} />} />
            <Route path="/converter" element={<CodeConverter apiURL={apiURL} />} />
            <Route path="/" element={<CodeForm apiURL={apiURL} />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
