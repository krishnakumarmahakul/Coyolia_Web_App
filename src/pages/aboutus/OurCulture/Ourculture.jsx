import React from 'react';
import styles from './Ourculture.module.css';

function Ourculture() {
  const culturePillars = [
    {
      title: "Open Collaboration",
      icon: "🤝",
      description: "We believe in transparent, open-source development where every team member's voice matters. Our flat hierarchy encourages direct communication across all levels."
    },
    {
      title: "Continuous Learning",
      icon: "📚",
      description: "Weekly knowledge-sharing sessions and dedicated learning budgets help us stay at the forefront of digital governance technologies."
    },
    {
      title: "Ethical Innovation",
      icon: "⚖️",
      description: "Every solution we build undergoes rigorous ethical reviews to ensure alignment with our anti-corruption mission and social impact goals."
    },
    {
      title: "Global Mindset",
      icon: "🌍",
      description: "With team members from 12 countries, we blend diverse perspectives to create universally accessible digital public goods."
    },
    {
      title: "Global Mindset",
      icon: "🌍",
      description: "With team members from 12 countries, we blend diverse perspectives to create universally accessible digital public goods."
    },
    {
      title: "Global Mindset",
      icon: "🌍",
      description: "With team members from 12 countries, we blend diverse perspectives to create universally accessible digital public goods."
    },
  ];

  return (
    <div className={styles.cultureContainer} style={{ backgroundColor: '#edf2f4' }}>
      <div className={styles.headerSection} style={{ color: '#21204c' }}>
        <h1>Our Culture Code</h1>
        <p className={styles.subheader}>
          The invisible framework that powers our visible impact
        </p>
      </div>

      <div className={styles.pillarsContainer}>
        {culturePillars.map((pillar, index) => (
          <div 
            key={index} 
            className={styles.pillarCard}
            style={{ 
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
              borderLeft: `5px solid #21204c`
            }}
          >
            <div className={styles.pillarIcon} style={{ color: '#21204c' }}>
              {pillar.icon}
            </div>
            <h3 style={{ color: '#21204c' }}>{pillar.title}</h3>
            <p className={styles.pillarDescription}>{pillar.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.valuesSection} style={{ backgroundColor: '#21204c', color: '#edf2f4' }}>
        <h2>Daily Rituals</h2>
        <ul className={styles.ritualsList}>
          <li>⚡ 15-minute standups with "win of the day" sharing</li>
          <li>🌱 Friday "open floor" innovation sessions</li>
          <li>🔄 Quarterly cross-team rotation program</li>
          <li>🎉 Monthly "Demo Days" with global partners</li>
        </ul>
      </div>
    </div>
  );
}

export default Ourculture;