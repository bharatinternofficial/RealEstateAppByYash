import React from "react";
import Link from "next/link";
import { ImHome } from "react-icons/im";
import styles from "../styles/Home.module.css"; // Correct import for CSS modules

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a style={{ display: "flex" }}>
            <ImHome className={styles.logoIcon} />
            <span className={styles.navbarTitle}>RealEstate</span>
          </a>
        </Link>
      </div>
      <div className={styles.navItemDiv}>
        <div className={styles.navItem}>
          <Link href="/" legacyBehavior>
            <a className={styles.navLink}>Home</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/search" legacyBehavior>
            <a className={styles.navLink}>Search</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
