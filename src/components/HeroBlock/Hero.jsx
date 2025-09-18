import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`${styles.hero_container} bottom_margin`}>
      <h1 className={styles.hero_title}>
        Amazing Discounts on Garden Products!
      </h1>
      <Link to="/sales" className={styles.hero_link}>
        Check out
      </Link>
    </div>
  );
};

export default Hero;
