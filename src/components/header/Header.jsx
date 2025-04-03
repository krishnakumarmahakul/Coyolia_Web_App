import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import coyolia_img from "../../assets/CoyoliaPrimarylogo.avif";

const Header = () => {
  const navigate = useNavigate();

  // Function to handle navigation with optimized smooth scroll
  const handleNavigation = (to) => {
    navigate(to);
    
    // Use setTimeout to ensure the new content has loaded before scrolling
    setTimeout(() => {
      // Get the exact position of your Front component's bottom
      const frontElement = document.querySelector('.front-component-class'); // Add your actual class name
      const frontBottom = frontElement ? 
        frontElement.getBoundingClientRect().bottom + window.scrollY : 
        window.innerHeight;
  
      // Calculate scroll position with 20px buffer below the Front component
      const scrollPosition = frontBottom + 20;
      
      // Smooth scroll with improved easing
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }, 50); // Small delay to allow DOM update
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={coyolia_img} alt="Coyolia Logo" />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? styles.active : styles.navLink}
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive ? styles.active : styles.navLink}
              onClick={() => handleNavigation("/services")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ambarglow" 
              className={({ isActive }) => isActive ? styles.active : styles.navLink}
              onClick={() => handleNavigation("/ambarglow")}
            >
              AmbarGlow
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/important" 
              className={({ isActive }) => isActive ? styles.active : styles.navLink}
              onClick={() => handleNavigation("/important")}
            >
              Important
            </NavLink>
            <div className={styles.dropdown}>
              <Link 
                to="/important/privacypolicy" 
                onClick={() => handleNavigation("/important/privacypolicy")}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/important/termcondition" 
                onClick={() => handleNavigation("/important/termcondition")}
              >
                Term & Condition
              </Link>
              <Link 
                to="/important/refund" 
                onClick={() => handleNavigation("/important/refund")}
              >
                Refund Policy
              </Link>
            </div>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? styles.active : styles.navLink}
              onClick={() => handleNavigation("/contact")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;