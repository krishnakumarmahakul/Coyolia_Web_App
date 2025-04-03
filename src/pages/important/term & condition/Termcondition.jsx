import React from 'react'
import styles from './Termcondition.module.css'

function Termcondition() {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.mainTitle}>Terms & Conditions</h1>
      <h2 className={styles.pageTitle}>Welcome to www.coyolia.com</h2>
      <p className={styles.introText}>
        Operated by Coyolia Technologies Pvt Ltd. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the website. If you do not agree with these terms, please do not use this site.
      </p>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>1. Acceptance of Terms</h3>
        <p className={styles.sectionContent}>
          By accessing or using the website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy. These terms apply to all visitors, users, and others who access or use the website.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>2. Changes to Terms</h3>
        <p className={styles.sectionContent}>
          Coyolia Technologies Pvt Ltd reserves the right to modify or update these terms and conditions at any time, without prior notice. Your continued use of the website after any changes indicates your acceptance of the new terms. It is your responsibility to review these terms periodically for updates.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>3. Use of the Website</h3>
        <p className={styles.sectionContent}>
          You agree to use the website for lawful purposes only and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the website by any third party.
        </p>
        <p className={styles.sectionContent}>
          You are prohibited from using the website to transmit any unlawful, threatening, defamatory, obscene, or otherwise objectionable material.
        </p>
        <p className={styles.sectionContent}>
          You may not use any automated system, including without limitation "robots," "spiders," or "offline readers," to access the website in a manner that sends more request messages to the Coyolia Technologies servers than a human can reasonably produce in the same period using a conventional online web browser.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>4. Intellectual Property Rights</h3>
        <p className={styles.sectionContent}>
          All content, trademarks, service marks, trade names, logos, and icons are proprietary to Coyolia Technologies Pvt Ltd or its affiliates, licensors, or third-party content providers.
        </p>
        <p className={styles.sectionContent}>
          You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without prior written consent from Coyolia Technologies Pvt Ltd.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>5. Disclaimer of Warranties</h3>
        <p className={styles.sectionContent}>
          The content on the website is provided on an "as-is" and "as-available" basis. Coyolia Technologies Pvt Ltd makes no representations or warranties of any kind, express or implied, as to the operation of the website, the content, or any information made available on the website.
        </p>
        <p className={styles.sectionContent}>
          Coyolia Technologies Pvt Ltd does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or the servers that make the website available are free of viruses or other harmful components.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>6. Limitation of Liability</h3>
        <p className={styles.sectionContent}>
          In no event will Coyolia Technologies Pvt Ltd, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use, or inability to use, the website.
        </p>
        <p className={styles.sectionContent}>
          This limitation of liability applies to all damages of any kind, including but not limited to direct, indirect, incidental, consequential, special, punitive, or exemplary damages, whether in an action under contract, negligence, or any other theory.
        </p>
      </div>

      <div className={styles.termsSection}>
        <h3 className={styles.sectionTitle}>7. Indemnification</h3>
        <p className={styles.sectionContent}>
          You agree to defend, indemnify, and hold harmless Coyolia Technologies Pvt Ltd, its affiliates, licensors, and service providers...
        </p>
      </div>
    </div>
  )
}

export default Termcondition