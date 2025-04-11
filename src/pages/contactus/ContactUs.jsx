import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h2>Start Your Skill Development Journey with Us!</h2>
        <p>Let's get started.</p>
      </div>
      <div className={styles.forms}>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">First Name</label>
          <input 
            id="user_name" 
            name="user_name" 
            type="text" 
            placeholder="Enter your first name" 
            required
          />

          <label htmlFor="user_email">E-mail</label>
          <input 
            id="user_email" 
            name="user_email" 
            type="email" 
            placeholder="Enter your email address" 
            required
          />

          <label htmlFor="user_phone">Phone Number</label>
          <input 
            id="user_phone" 
            name="user_phone" 
            type="tel" 
            placeholder="Enter your phone number" 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Enter your message"
            rows="4"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;