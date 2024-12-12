/* eslint-disable no-unused-vars */
// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // Set up state to handle form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a form submission (for now just log the form data)
    console.log('Form submitted:', { name, email, message });
    
    // Reset the form
    setName('');
    setEmail('');
    setMessage('');
    
    // Show submission success message
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px' }}>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block' }}>Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block' }}>Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message" style={{ display: 'block' }}>Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '150px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
