import React from 'react';
import './Contact.css'; // Ensure you have a Contact.css file in the same directory

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-intro">
        If you have any questions or need further information, please feel free to contact us.
      </p>

      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
// Updated on Sun Jul  6 12:57:28 CDT 2025
