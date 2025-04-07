import React from 'react';
import styles from './Leadership.module.css';

function Leadership() {
  const leadershipTeam = [
    {
      name: "Dr. Priya Sharma",
      title: "Founder & CEO",
      bio: "Digital governance expert with 20+ years experience implementing open-source solutions across 15 countries. Former UN Technology Advisor.",
      img: "👩‍💼"
    },
    {
      name: "James Okafor",
      title: "CTO",
      bio: "Lead architect of 40+ DPGA-certified platforms. Specializes in blockchain-based identity systems for government applications.",
      img: "🧑‍💻"
    },
    {
      name: "Amina Diallo",
      title: "Director of Global Partnerships",
      bio: "Connects governments with open-source solutions across Africa and Asia. Fluent in 5 languages with a focus on digital inclusion.",
      img: "🌍"
    },
    {
      name: "Prof. Raj Patel",
      title: "Chief Ethics Officer",
      bio: "Developed the Anti-Corruption Technology Framework adopted by 7 national governments. Visiting professor at MIT.",
      img: "⚖️"
    }
  ];

  return (
    <div className={styles.leadershipContainer} style={{ backgroundColor: '#edf2f4' }}>
      <div className={styles.header}>
        <h1 style={{ color: '#21204c' }}>Our Leadership</h1>
        <p className={styles.subtitle} style={{ color: '#21204c' }}>
          The visionaries guiding our mission to transform digital governance
        </p>
      </div>

      <div className={styles.teamGrid}>
        {leadershipTeam.map((leader, index) => (
          <div 
            key={index} 
            className={styles.profileCard}
            style={{ 
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
              borderBottom: `4px solid #21204c`
            }}
          >
            <div className={styles.avatar} style={{ color: '#21204c' }}>
              {leader.img}
            </div>
            <h3 style={{ color: '#21204c' }}>{leader.name}</h3>
            <p className={styles.title} style={{ color: '#6c757d' }}>{leader.title}</p>
            <p className={styles.bio}>{leader.bio}</p>
          </div>
        ))}
      </div>

      <div className={styles.valuesSection} style={{ backgroundColor: '#21204c', color: '#edf2f4' }}>
        <h2>Leadership Principles</h2>
        <ul className={styles.principlesList}>
          <li>🔍 Radical Transparency in All Decisions</li>
          <li>🤲 Knowledge Sharing as Core Responsibility</li>
          <li>🌱 Growth Mindset for Continuous Improvement</li>
          <li>⚖️ Ethical Tech Development Above All</li>
        </ul>
      </div>
    </div>
  );
}

export default Leadership;