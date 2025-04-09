import React, { useState } from 'react';
import styles from './FreeSession.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FreeSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`, `${hour}:30`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    alert('Your free session has been scheduled!');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Schedule Your Free 15-Minute Session</h2>
      
      <form onSubmit={handleSubmit} className={styles.sessionForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
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
            maxDate={new Date(new Date().setDate(new Date().getDate() + 30))}
            dateFormat="MMMM d, yyyy"
            placeholderText="Choose a date"
            className={styles.datePicker}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="time">Select Time (9AM-5PM)*</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}:00 {time < 12 ? 'AM' : 'PM'}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="goals">What are your main career goals?</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Confirm Free Session
        </button>
      </form>
    </div>
  );
};

export default FreeSession;