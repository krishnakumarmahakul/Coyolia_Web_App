import React from "react";
import { Outlet } from "react-router-dom";
import styles from './Hero.module.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Staticblog from "../../pages/Blogs&StaticContent/Staticblog";
import Contactmail from "../../pages/contactmail/contactmail";
import OurFounder from "../../pages/skillcontact/OurFounder";
import Testimonies from "../../pages/testimonies/Testimonies";
import Front from "../../pages/front/Front";

const Hero = () => {
  return (
    <div className={styles.gridcontainer}>
      <Header />
      {/* This wrapper will contain both Front and Outlet content */}
      <div className={styles.contentArea}>
        <Front />
        <div className={styles.pageContent}>
          <Outlet /> {/* This will render the route components below Front */}
        </div>
      </div>
      <Staticblog />
      <Contactmail />
      <OurFounder />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Hero;