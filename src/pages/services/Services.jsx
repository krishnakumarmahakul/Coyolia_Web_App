import React from 'react';
import styles from './Services.module.css';
import { Outlet, useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
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
      title: "Consulting Services",
      description: "Niche, affordable and short term assignments on making your IT Department future ready."
    }
  ];

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
              </div>
            ))}
          </div>
        </>
      )}
      
      {/* This will render nested route content if any exists */}
      <Outlet />
    </div>
  );
};

export default Services;