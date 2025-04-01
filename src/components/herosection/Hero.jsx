import React from "react";
import { Outlet } from "react-router-dom";
import styles from './Hero.module.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Staticblog from "../../pages/Blogs&StaticContent/Staticblog";
import Contactmail from "../../pages/contactmail/contactmail";


const Hero = () => {
  return (
    <div className={styles.gridcontainer}>
      <Header />
      <main className={styles.maincontent}>
        <Outlet />
      </main>
      <Staticblog />
      <Contactmail/>
      <Footer />
    </div>
  );
};

export default Hero;
