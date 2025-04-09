import React from 'react'
import styles from './Front.module.css'
import { useNavigate } from 'react-router-dom';

function Front() {
  const navigate = useNavigate(); 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
              <div className={styles.one}>A SOCIAL ENTERPRISE TO CREATE DIGITAL AMBASSADORS.</div>
              <div className={styles.two}></div>
              <div  className={styles.three}></div>
              <div  className={styles.four}></div>
              <div  className={styles.five}></div>
              <div  className={styles.six}></div>
              <div  className={styles.seven}></div>
              <div  className={styles.eight}></div>
              <div className={styles.nine}>
                <p>
                    Coyolia, which stands for Cohort of Young Leaders in Action, will create abundant opportunities for
                    youth employment across India and Africa by harnessing OpenSource IP in Digitalization of communities.
                </p>
                </div>
              <div className={styles.ten}>
                <button className={styles.btn} onClick={()=>{
                  navigate("/app")
                }}
                > Explore services <div>&#8594;</div></button>
              </div>
              
        </div>
      </div>
    </>
  )
}

export default Front;