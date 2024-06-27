import React from "react";
import styles from "../styles/Home.module.css"; // Correct import for CSS modules

const Banner = () => {
  return (
      <div className={styles.banner}>
        <img src="banner.png" alt="Banner" className={styles.bannerImage} />
      </div>
  );
};

export default Banner;
