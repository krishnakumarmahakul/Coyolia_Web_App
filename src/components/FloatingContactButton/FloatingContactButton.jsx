import React, { useState } from 'react';
import styles from './FloatingContactButton.module.css';

const FloatingContactButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!'); // Temporary for testing
        setShowPopup(false);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                className={styles.floatingButton}
                onClick={() => setShowPopup(true)}
                aria-label="Contact Coyolia"
            >
                <span className={styles.buttonIcon}>✉️</span>
                <span className={styles.buttonText}>Contact Coyolia</span>
            </button>

            {/* Popup Modal */}
            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setShowPopup(false)}
                            aria-label="Close popup"
                        >
                            &times;
                        </button>

                        <h3 className={styles.popupTitle}>Schedule a Consultation</h3>

                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            {/* Reason for Contact Dropdown - Simple Version */}
                            <div className={styles.formGroup}>
                                <label htmlFor="contactReason">Reason for Contact*</label>
                                <select id="contactReason" required>
                                    <option value="">-- Please select --</option>
                                    <option value="career_counseling">Career Counseling</option>
                                    <option value="employee_training">Employee Training Program</option>
                                    <option value="curriculum_dev">Technical Curriculum Development</option>
                                    <option value="ai_solutions">AI Solutions Inquiry</option>
                                    <option value="talent_management">Talent Management</option>
                                    <option value="leadership_dev">Leadership Development</option>
                                    <option value="workshop">Workshop Booking</option>
                                    <option value="partnership">Partnership Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Your existing form fields */}
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message*</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Tell us about your needs"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingContactButton;