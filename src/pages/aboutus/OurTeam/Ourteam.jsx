import React from 'react';
import styles from './Ourteam.module.css';

function Ourteam() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science with 15+ years experience in open-source technologies and digital governance systems.",
      expertise: "Blockchain, Digital Identity"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in DPGA-compliant solutions. Built 40+ government digital platforms across 3 continents.",
      expertise: "React, Node.js, Docker"
    },
    {
      name: "Amina Diallo",
      role: "Community Director",
      bio: "Social entrepreneur connecting African youth with digital opportunities through our ambassador programs.",
      expertise: "Community Building, Partnerships"
    },
    {
      name: "Amina Diallo",
      role: "Community Director",
      bio: "Social entrepreneur connecting African youth with digital opportunities through our ambassador programs.",
      expertise: "Community Building, Partnerships"
    },
    {
      name: "Amina Diallo",
      role: "Community Director",
      bio: "Social entrepreneur connecting African youth with digital opportunities through our ambassador programs.",
      expertise: "Community Building, Partnerships"
    },
    {
      name: "Amina Diallo",
      role: "Community Director",
      bio: "Social entrepreneur connecting African youth with digital opportunities through our ambassador programs.",
      expertise: "Community Building, Partnerships"
    },
  ];

  return (
    <div className={styles.teamContainer} style={{ backgroundColor: '#edf2f4' }}>
      <h1 className={styles.header} style={{ color: '#21204c' }}>Meet Our Leadership</h1>
      <p className={styles.subheader} style={{ color: '#21204c' }}>
        The brilliant minds driving Coyolia's mission forward
      </p>
      
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className={styles.memberCard}
            style={{ 
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
              borderTop: `4px solid #21204c`
            }}
          >
            <h3 style={{ color: '#21204c' }}>{member.name}</h3>
            <p className={styles.role} style={{ color: '#6c757d' }}>{member.role}</p>
            <p className={styles.bio} style={{ color: '#21204c' }}>{member.bio}</p>
            <div className={styles.expertiseTag} style={{ backgroundColor: '#21204c', color: '#edf2f4' }}>
              {member.expertise}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourteam;