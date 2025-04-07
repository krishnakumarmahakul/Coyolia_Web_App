import React from 'react';
import styles from './Solution.module.css';
import { Outlet, useLocation } from 'react-router-dom';

function Solution() {
  const location = useLocation();
  
  // Corrected path check - changed from '/solutions' to '/solution'
  const showMainContent = location.pathname === '/solution' || 
                         location.pathname === '/solution/';

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {showMainContent && (
          <>
            <section className={styles.section}>
              <div className={styles.badge}>Our Approach</div>
              <article className={styles.text}>
                We develop modular, open-source solutions that governments can adapt to their 
                specific needs while maintaining interoperability through DPGA standards.
              </article>
            </section>

            <section className={styles.section}>
              <div className={styles.badge}>Core Offerings</div>
              <article className={styles.text}>
                From digital identity platforms to corruption-resistant procurement systems,
                our solutions are built on blockchain-backed transparency frameworks.
              </article>
            </section>

            <section className={styles.section}>
              <div className={styles.badge}>Implementation</div>
              <article className={styles.text}>
                Partnering with local developers through our ambassador program to ensure 
                sustainable deployment and maintenance of all solutions.
              </article>
            </section>
          </>
        )}

        <div className={styles.nestedContent}>
          <Outlet /> {/* This will render /solution/ailearning, /solution/aitalent, etc. */}
        </div>
      </div>
    </div>
  );
}

export default Solution;