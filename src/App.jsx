import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FloatingContactButton from "./components/FloatingContactButton/FloatingContactButton";
import { Outlet, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('free'); // 'free' or 'full'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleBookSession = (type) => {
    setFormType(type);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formType === 'free' ? 'Free 15-minute' : 'Full 60-minute'} session booked for ${selectedDate} at ${selectedTime}`);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  /* Add this to your form component */
const handleFocus = (e) => {
  e.target.parentElement.classList.add('focused');
};

const handleBlur = (e) => {
  if (!e.target.value) {
    e.target.parentElement.classList.remove('focused');
  }
}

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`, `${hour}:30`);
  }

  return (
    <>
      <Header />
      <div className={styles.counselingContainer}>
        {!showForm ? (
          <>
            <div className={styles.contentSection}>
              <h1 className={styles.title}>Transform Your Career Path</h1>
              <h2 className={styles.subtitle}>Professional Career Counseling Sessions</h2>
              
              <div className={styles.quickSessionCard}>
                <h3 className={styles.quickSessionTitle}>Not sure where to start?</h3>
                <p className={styles.quickSessionDesc}>
                  Try our free 15-minute introductory session to explore how we can help you
                </p>
                <div className={styles.quickSessionBenefits}>
                  <p>✓ No-obligation consultation</p>
                  <p>✓ Get your career questions answered</p>
                  <p>✓ Understand our counseling approach</p>
                </div>
                <button 
                  className={styles.quickSessionButton}
                  onClick={() => handleBookSession('free')}
                >
                  Book Free Intro Session
                </button>
              </div>

              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div className={styles.benefitText}>
                    <h3>Personalized Guidance</h3>
                    <p>Tailored advice based on your skills, interests, and market trends</p>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div className={styles.benefitText}>
                    <h3>Career Roadmapping</h3>
                    <p>Clear path to achieve your professional goals with actionable steps</p>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div className={styles.benefitText}>
                    <h3>Industry Insights</h3>
                    <p>Latest trends and opportunities in your field of interest</p>
                  </div>
                </div>
              </div>
              
              <p className={styles.description}>
                Our expert career counselors help you navigate through career transitions, 
                job searches, and professional development with proven strategies that work.
              </p>
            </div>
            {/* this is the section for the counceller loggin and  */}
            
            <div className={styles.actionSection}>
            <button
            onClick={() => {navigate('/counceler')}}
              className={styles.counselorLoginButton}
            >
              Counselor Login
            </button>
              <div className={styles.sessionCard}>
                <h3 className={styles.sessionTitle}>Ready to take the next step?</h3>
                <p className={styles.sessionDesc}>Book a 1-on-1 session with our career experts</p>
                <button 
                  className={styles.bookButton} 
                  onClick={() => handleBookSession('full')}
                >
                  Book Full Session
                </button>
                <div className={styles.sessionFeatures}>
                  <p>✓ 60-minute deep dive session</p>
                  <p>✓ Personalized career assessment</p>
                  <p>✓ Follow-up resources</p>
                  <p>✓ Actionable career plan</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.bookingFormContainer}>
            <h2 className={styles.formTitle}>
              {formType === 'free' ? 'Free 15-Minute' : 'Full 60-Minute'} Session Booking
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={formData.phone}
                    onChange={handleInputChange}
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
                  <label>Career Goals {formType === 'full' ? '*' : '(Optional)'}</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows="4"
                    required={formType === 'full'}
                  />
                </div>
              </div>

              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  {formType === 'free' ? 'Book Free Session' : 'Book Full Session'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
      <FloatingContactButton/>

    </>
  );
};

export default App;