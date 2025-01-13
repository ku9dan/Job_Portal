import React from "react";
// import googlePlay from "play.png";
// import appStore from "app.png";
// import illustration from "search-person.png";
import styles from "../styles/rating.module.css";

const Rating = () => {
  return (
    <div className={styles.container}>
      {/* Left section: Text content */}
      <div className={styles.leftSection}>
        <h1>
          Get a Job Faster on <span className={styles.highlight}>App</span>
        </h1>
        <div className={styles.rating}>
          <span>Rate 4.6</span>
          <span className={styles.stars}>★★★★★</span>
          <span>On Play Store</span>
        </div>
        <div className={styles.inputContainer}>
          <select className={styles.countryCode}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <input
            type="text"
            placeholder="Phone"
            className={styles.phoneInput}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.storeButton}>
            <img src="play.png" alt="Google Play" />
            <div>
              <span>Get it on</span>
              <h3>Google Play</h3>
            </div>
          </button>
          <button className={styles.storeButton}>
            <img src="app.png" alt="App Store" />
            <div>
              <span>Download on </span>
              <h3>App Store</h3>
            </div>
          </button>
        </div>
      </div>

      {/* Right section: Illustration */}
      <div className={styles.rightSection}>
        <img
          src="search-person.png"
          alt="Illustration"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Rating;
