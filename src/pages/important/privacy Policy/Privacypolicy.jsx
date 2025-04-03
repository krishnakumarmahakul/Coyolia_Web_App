import React from 'react'
import styles from './Privacypolicy.module.css'

function Privacypolicy() {
  return (
    <div className={styles.Privacypolicy}>
      
      <h1 className={styles.mainTitle}>Privacy Policy</h1>
      <p className={styles.introText}>
        This Privacy Policy outlines how Coyolia Technologies Pvt Ltd collects, uses, discloses, and protects the information provided by users of the website www.coyolia.com. By using the website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p className={styles.sectionContent}>
          We collect various types of information from and about users of our website, including:
        </p>
        <ul className={styles.infoList}>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, job title, company name, or other information you voluntarily provide when you fill out forms on our website or communicate with us.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, Internet Protocol (IP) address, pages visited, the time and date of your visit, and other similar information.
          </li>
          <li>
            <strong>Cookies:</strong> We may use cookies and similar technologies to collect information about your activities on our website to enhance user experience. You can choose to disable cookies in your browser settings.
          </li>
        </ul>
      </div>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p className={styles.sectionContent}>
          Coyolia Technologies Pvt Ltd uses the information collected for various purposes, including:
        </p>
        <ul className={styles.infoList}>
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve and personalize user experience.</li>
          <li>To respond to inquiries, process requests, and provide customer support.</li>
          <li>To send updates, marketing materials, and promotional content (only if you have opted in to receive such communications).</li>
          <li>To monitor and analyze usage patterns and trends to improve our website's performance and functionality.</li>
        </ul>
      </div>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>3. Disclosure of Your Information</h2>
        <p className={styles.sectionContent}>
          We may share your information with third parties under the following circumstances:
        </p>
        <ul className={styles.infoList}>
          <li>
            <strong>Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, user information may be transferred as part of that business transaction.
          </li>
        </ul>
      </div>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>4. Security of Your Information</h2>
        <p className={styles.sectionContent}>
          We take reasonable measures to protect the information that we collect from or about you (including your personal information) from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure, so we cannot guarantee its absolute security.
        </p>
      </div>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>5. Your Rights and Choices</h2>
        <p className={styles.sectionContent}>
          You have certain rights regarding your personal information:
        </p>
        <ul className={styles.infoList}>
          <li>
            <strong>Access and Update:</strong> You may request access to your personal information that we hold and request corrections of any inaccuracies.
          </li>
          <li>
            <strong>Opt-Out:</strong> You may opt-out of receiving marketing communications from us by following the unsubscribe instructions provided in the marketing email you receive or by contacting us directly.
          </li>
          <li>
            <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our website.
          </li>
        </ul>
      </div>

      <div className={styles.policySection}>
        <h2 className={styles.sectionTitle}>6. Third-Party Websites</h2>
        <p className={styles.sectionContent}>
          Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site.
        </p>
      </div>
   


    </div>
  )
}

export default Privacypolicy