import React from 'react'
import styles from './Skillcontact.module.css'

function Skillcontact() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                    Start Your Skill Development Journey with Us!
                    </h2>
                    <p>Let's get started.</p>
                </div>
                <div className={styles.forms}>
                    <form >
                        <label htmlFor="firstname">First Name</label>
                        <input id='firstname' name='firstname' type="text" />

                        <label htmlFor="lastname">Last Name</label>
                        <input id='lastname' name='lastname' type="text" />

                        <label htmlFor="email">E-mail</label>
                        <input id='email' name='email' type="email" />

                        <label htmlFor="phonenumber">Last Name</label>
                        <input id='phonenumber' name='phonenumber' type="text" />
                        

                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skillcontact