import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./HeroSection.module.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className={styles.heroContent}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <h2 className={styles.title}>
        Modernizing the_Job
        <br />
        Search Experience
      </h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Your Needs"
        />
        <select className={styles.searchSelect}>
          <option>Web Development</option>
          <option>Design</option>
          <option>Software Engineer</option>
        </select>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
      </div>
      <div className={styles.popularJobs}>
        <span>Popular Jobs:</span>
        <button className={styles.jobTag}>Designer</button>
        <button className={styles.jobTag}>Web Developer</button>
        <button className={styles.jobTag}>Software Engineer</button>
      </div>
    </div>
  );
};

export default HeroSection;
