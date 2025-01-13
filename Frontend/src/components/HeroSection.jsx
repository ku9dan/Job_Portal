import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/HeroSection.module.css";
// import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className={styles.heroContent}>
      <div className={styles.navbar}>
        {/* <Navbar /> */}
      </div>
      <h1 className={styles.mainTitle}>
        <span className={styles.orangeOutline}>One Step Closer</span>
        <br />
        <span className={styles.blackText}>Get your Dream Job</span>
      </h1>
      <p className={styles.description}>
        Find You New Job Today! New Job Postings Everyday just for you, browse
        the job you want and apply wherever you want.
      </p>
      <div className={styles.searchBar}>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Job title or keyword"
          />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Location (e.g., Bandung, Indonesia)"
          />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;
