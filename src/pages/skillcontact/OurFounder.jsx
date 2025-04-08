import React from 'react';
import styles from './OurFounder.module.css';
import Avinash from '../../assets/Avinash Kulkarni.jpg'
import Ravikanth from '../../assets/Ravikanth Taduri.jpg'

function OurFounder() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={Avinash}
          alt="Avinash Kulkarni"
          className={styles.image}
        />
        <h3 className={styles.name}>Avinash Kulkarni</h3>
        <p className={styles.title}>Founder & CEO</p>
        <p className={styles.description}>
          With 29 years of experience in leading global corporations like Xerox, Hitachi,
          RIL, and IL&FS, Avinash Kulkarni brings a wealth of expertise to Coyola Technologies.
          His diverse background spans the not-for-profit sector and dynamic startup environments.
        </p>
      </div>

      <div className={styles.card}>
        <img
          src={Ravikanth}
          alt="Ravikanth Taduri"
          className={styles.image}
        />
        <h3 className={styles.name}>Ravikanth Taduri</h3>
        <p className={styles.title}>Co-Founder & HR Head</p>
        <p className={styles.description}>
          With 21 years of experience in mid-market companies, Ravikanth Taduri has excelled
          as a Head of HR and business partner. Ravikanth specializes in developing and implementing SOPs,
          cultivating organisational culture, and building strong foundations for IT and ITES companies.
        </p>
      </div>
    </div>
  );
}

export default OurFounder;
