// src/page/contact/Contact.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your backend or email service
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="vim-inspired">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reflections">Reflections</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="contact-main">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Name</label>
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
            <span className="focus-border"></span>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Message</label>
            <span className="focus-border"></span>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
      </footer>
    </div>
  );
};

export default Contact;
