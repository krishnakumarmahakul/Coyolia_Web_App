import React from 'react';
import styles from './Ailearning.module.css';

function Ailearning() {
  const aiServices = [
    {
      title: "Custom AI Curriculum",
      description: "Tailored learning paths for organizations to upskill teams in AI fundamentals and advanced applications",
      icon: "📚"
    },
    {
      title: "Model Development",
      description: "End-to-end development of custom AI models for specific business needs and use cases",
      icon: "🧠"
    },
    {
      title: "Ethics Training",
      description: "Workshops on responsible AI development and deployment practices",
      icon: "⚖️"
    },
    {
      title: "Implementation Support",
      description: "Hands-on guidance for integrating AI solutions into existing workflows",
      icon: "🛠️"
    }
  ];

  return (
    <div className={styles.container} style={{ backgroundColor: '#edf2f4' }}>
      <div className={styles.header}>
        <h1 style={{ color: '#21204c' }}>AI Learning & Development</h1>
        <p className={styles.subheader} style={{ color: '#21204c' }}>
          Building human capacity for the AI-driven future
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {aiServices.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceCard}
            style={{ 
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
              borderLeft: `5px solid #21204c`
            }}
          >
            <div className={styles.serviceIcon} style={{ color: '#21204c' }}>
              {service.icon}
            </div>
            <h3 style={{ color: '#21204c' }}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection} style={{ backgroundColor: '#21204c', color: '#edf2f4' }}>
        <h2>Ready to Transform Your Organization?</h2>
        <p>Our AI specialists will design a customized learning and development program for your team</p>
        <button className={styles.ctaButton}>Schedule Consultation</button>
      </div>
    </div>
  );
}

export default Ailearning;