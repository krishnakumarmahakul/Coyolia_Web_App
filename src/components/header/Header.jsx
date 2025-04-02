import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import VolumeKnob from "../volumeknob/VolumeKnob";
import coyolia_img from "../../assets/CoyoliaPrimarylogo.avif";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={coyolia_img} alt="Coyolia Logo" />
      </div>

      {/* <div className={styles.knobWrapper}>
        <VolumeKnob />
      </div> */}

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/ambarglow" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              AmbarGlow
            </NavLink>
          </li>
          <li>
            <NavLink to="/important" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Important
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : styles.navLink}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
