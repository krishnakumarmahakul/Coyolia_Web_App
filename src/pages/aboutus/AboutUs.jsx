import React from 'react'
import styles from './AboutUs.module.css'

function AboutUs() {
  return (
    <>
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.badge}>Vision</div>
        <article  className={styles.text}>
        At Coyolia Technologies, our vision is to create a world of abundant opportunities for youth by leveraging the power of the Digital Public
          Goods Alliance. We aim to harness Indian and open-source IP to tackle
          global challenges, reduce corruption, and empower communities
          worldwide.
        </article>
       
      </section>

      <section className={styles.section}>
        <div className={styles.badge}>Mission</div>
        <article className={styles.text}>
          As Digital Ambassadors, Coyolia Technologies will champion
          open-source community projects in India and beyond. Collaborating
          with the Government of India and DPGA, we will promote these
          solutions in new regions, infuse innovative skills and training for
          youth in Ethiopia, India, and African Union members, and support open
          standards-based technologies to foster a zero-corruption environment.
          We stay local while integrating global best practices.
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.badge}>Values</div>
        <article className={styles.text}>
          We believe in integrity, transparency, and collaboration. By
          fostering an open-source culture, we strive to create solutions that
          are ethical, sustainable, and impactful for communities worldwide.
        </article>
      </section>
    </div>
   </>
  )
}

export default AboutUs