import React from 'react';
import styles from './Services.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBaseRoute = location.pathname === '/services';
  
  const services = [
    {
      title: "Skill Development and Courses",
      description: "Coyolia Technologies has custom made programs for both, rural and urban youth. We also have intense programs for mid career professionals who wish to upskill."
    },
    {
      title: "Staff Augmentation",
      description: "Specific, domain-based head hunting and different financial models for staff augmentation."
    },
    {
      title: "Career Counseling",
      description: "Niche, affordable and short term assignments on making your IT Department future ready."
    }
  ];

  const handleNavigateToCounseling = () => {
    navigate('/app');
  };

  return (
    <div className={styles.servicesContainer}>
      {isBaseRoute && (
        <>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                {service.title === "Career Counseling" && (
                  <button 
                    className={styles.counselingButton}
                    onClick={handleNavigateToCounseling}
                  >
                    Book a Session
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Services;