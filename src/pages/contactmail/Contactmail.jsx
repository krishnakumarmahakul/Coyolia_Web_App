import React from 'react'
import styles from './contactmail.module.css'

function Contactmail() {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        position: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
      };


  return (
     <div className={styles.container}>
        <h1 className={styles.title}>Coyolia </h1>
        <h1 className={styles.title}>Technologies </h1>
        <div className={styles.formcontainer}>

        
        
      <div className={styles.header}>
        
        <p className={styles.subtitle}>Connect with Like-Minded Learners and Experts</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.emailPrompt}>Drop in your email for Event Updates</p>
        
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>First name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>Last name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="position" className={styles.label}>Position*</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contactmail