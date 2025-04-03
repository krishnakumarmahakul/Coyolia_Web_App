import React from 'react'
import styles from './ContactUs.module.css'

function ContactUs() {
  return (
    <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                        Start Your Skill Development Journey with Us!
                    </h2>
                    <p>Let's get started.</p>
                </div>
                <div className={styles.forms}>
                    <form>
                        <label htmlFor="firstname">First Name</label>
                        <input id='firstname' name='firstname' type="text" placeholder="Enter your first name" />

                        <label htmlFor="lastname">Last Name</label>
                        <input id='lastname' name='lastname' type="text" placeholder="Enter your last name" />

                        <label htmlFor="email">E-mail</label>
                        <input id='email' name='email' type="email" placeholder="Enter your email address" />

                        <label htmlFor="phonenumber">Phone Number</label>
                        <input id='phonenumber' name='phonenumber' type="tel" placeholder="Enter your phone number" />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
  )
}

export default ContactUs