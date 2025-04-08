import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import FloatingContactButton from "./components/FloatingContactButton/FloatingContactButton";

const App = () => {
  const handleBookSession = () => {
    alert('Booking session...'); // Replace with actual booking logic
  };

  return (
    <>
      <Header />
      <div className={styles.counselingContainer}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>Transform Your Career Path</h1>
          <h2 className={styles.subtitle}>Professional Career Counseling Sessions</h2>
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
        
        <div className={styles.actionSection}>
          <div className={styles.sessionCard}>
            <h3 className={styles.sessionTitle}>Ready to take the next step?</h3>
            <p className={styles.sessionDesc}>Book a 1-on-1 session with our career experts</p>
            <button className={styles.bookButton} onClick={handleBookSession}>
              Book a Session
            </button>
            <div className={styles.sessionFeatures}>
              <p>✓ 60-minute deep dive session</p>
              <p>✓ Personalized career assessment</p>
              <p>✓ Follow-up resources</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingContactButton/>
    </>
  );
};

export default App;