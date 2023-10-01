// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or just want to say hello? We'd love to hear
          from you! You can reach out to us using the following contact
          details or by filling out the contact form below.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <span>Email: Aakkash@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <span>Phone: +91 123 456 7890</span>
          </div>
        </div>

        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
