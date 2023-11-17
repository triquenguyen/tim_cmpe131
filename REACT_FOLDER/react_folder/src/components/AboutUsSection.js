import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactSection.css';

function AboutUsSection() {
    
  return (
    <div className="contact-section">
    <h2>About Us</h2>
    <form className="contact-form" action="#" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <Button buttonStyle="btn--outline">Submit</Button>
    </form>
  </div>
  );
}

export default AboutUsSection;