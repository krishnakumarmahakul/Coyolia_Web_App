import React from 'react'
import styles from  './Refund.module.css'
function Refund() {
  return (
    <div className={styles.refundPolicy}>
      <h1 className={styles.title}>Refund Policy</h1>
      <p className={styles.intro}>
        This Refund Policy outlines the terms and conditions under which Coyolia Technologies Pvt Ltd offers refunds for services and courses provided through www.coyolia.com. By purchasing our services, you agree to the terms of this Refund Policy.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Cancellation and Refund Conditions</h2>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Cancellation Before 5 Working Days</h3>
          <p className={styles.pointContent}>
            If a customer chooses to cancel the services or training before 5 working days from the date of commencement, the entire amount paid will be refunded. The refund will be processed within 3 working days from the date of the cancellation request.
          </p>
        </div>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Cancellation Before 48 Hours</h3>
          <p className={styles.pointContent}>
            If a customer requests cancellation before 48 hours of the course or service commencement, 50% of the amount paid will be refunded. The refund will be processed within 3 working days from the date of the cancellation request.
          </p>
        </div>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Cancellation Within 48 Hours</h3>
          <p className={styles.pointContent}>
            If a customer requests cancellation within 48 hours of the course or service commencement, no refund shall be applicable.
          </p>
        </div>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Self-Paced Courses</h3>
          <p className={styles.pointContent}>
            For self-paced courses, once the subscription is availed, cancellation is available only if the cancel request is made within 24 hours of subscription. After this period, no refund shall be provided.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Refund Process</h2>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Payment Method</h3>
          <p className={styles.pointContent}>
            All refunds will be made to the original source of payment used during the purchase.
          </p>
        </div>
        
        <div className={styles.policyPoint}>
          <h3 className={styles.pointTitle}>Deductions</h3>
          <p className={styles.pointContent}>
            Any applicable taxes, service charges, and payment gateway charges will be deducted from the refund amount.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How to Request a Refund</h2>
        <p className={styles.sectionContent}>
          To request a refund, please contact our customer service team at <a href="mailto:support@coyolia.com" className={styles.emailLink}>support@coyolia.com</a> or through the contact form on our website. Please include your order details and the reason for cancellation in your request to facilitate quick processing.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Processing Time</h2>
        <p className={styles.sectionContent}>
          Refunds will be processed within 3 working days from the date of the approved cancellation request.
          The refunded amount will be credited back to the original payment method, subject to the processing timelines of your card issuer or bank.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Jurisdiction</h2>
        <p className={styles.sectionContent}>
          For any disputes arising from or relating to this Refund Policy, the jurisdiction shall be Hyderabad, India. By using our services, you agree to submit to the jurisdiction of Hyderabad, India, for resolving any legal matters.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Changes to This Policy</h2>
        <p className={styles.sectionContent}>
          Coyolia Technologies Pvt Ltd reserves the right to modify or update this Refund Policy at any time. Any changes will be effective immediately upon posting on this page. It is the responsibility of the customer to review this policy periodically for any updates.
        </p>
      </div>
    </div>
  )
}

export default Refund