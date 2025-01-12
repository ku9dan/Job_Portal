import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.logo}>Quiety</h1>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Find Jobs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <a href="#">
        <button className={styles.getStarted}>Get Started</button>
      </a>
    </nav>
  );
};

export default Navbar;
