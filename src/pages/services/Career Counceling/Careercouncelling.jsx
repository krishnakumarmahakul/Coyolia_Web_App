import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Careercouncelling.module.css';

const Careercouncelling = () => {
  const { onClose } = useOutletContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Full session booked for ${selectedDate} at ${selectedTime}`);
    onClose();
  };

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`, `${hour}:30`);
  }

  return (
    <div className={styles.formContainer}>
      <h2>Book Your 1-Hour Career Counseling Session</h2>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Full Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Select Date*</label>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              className={styles.dateInput}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Select Time (9AM-5PM)*</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>
                  {time} {parseInt(time) < 12 ? 'AM' : 'PM'}
                </option>
              ))}
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label>Career Goals*</label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button 
            type="button" 
            className={styles.cancelButton}
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className={styles.submitButton}
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careercouncelling;