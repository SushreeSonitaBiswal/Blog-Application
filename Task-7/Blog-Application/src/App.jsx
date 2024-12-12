/* eslint-disable no-unused-vars */
// src/App.js
import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Home';
import PostDetail from './components/PostDetails';
import About from './components/About';
import Contact from './components/Contact';  // Import the Contact component


const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', paddingBottom: '60px', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />  {/* Add route for Contact */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




