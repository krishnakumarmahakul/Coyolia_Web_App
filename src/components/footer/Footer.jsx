import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.socialSection}>
                <div className={styles.socialText}>Get connected with us on social networks:</div>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className={styles.icon}><i className="fab fa-twitter"></i></a>
                    <a href="#" className={styles.icon}><i className="fab fa-google"></i></a>
                    <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
                    <a href="#" className={styles.icon}><i className="fab fa-linkedin"></i></a>
                    <a href="#" className={styles.icon}><i className="fab fa-github"></i></a>
                </div>
            </section>
            
            <section className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <h6><i className="fas fa-gem"></i> Coyolia pvt. ltm</h6>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
                <div className={styles.footerColumn}>
                    <h6>Products</h6>
                    <a href="#">Angular</a>
                    <a href="#">React</a>
                    <a href="#">Vue</a>
                    <a href="#">Laravel</a>
                </div>
                <div className={styles.footerColumn}>
                    <h6>Useful Links</h6>
                    <a href="#">Pricing</a>
                    <a href="#">Settings</a>
                    <a href="#">Orders</a>
                    <a href="#">Help</a>
                </div>
                <div className={styles.footerColumn}>
                    <h6>Contact</h6>
                    <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
                    <p><i className="fas fa-envelope"></i> info@example.com</p>
                    <p><i className="fas fa-phone"></i> +01 234 567 88</p>
                    <p><i className="fas fa-print"></i> +01 234 567 89</p>
                </div>
            </section>
            
            <div className={styles.footerBottom}>
                © 2021 Copyright:
                <a href="https://www.coyolia.com/">COYOLIA.COM</a>
            </div>
        </footer>
    );
};

export default Footer;
