import React from "react";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.jobportalContainer}>
      {/* <div className={styles.navbar}>
        <Navbar />
      </div> */}
      <div className={styles.heroSection}>
        <HeroSection />
      </div>
      <div className={styles.cities}>
        <Cities />
      </div>
      <div className={styles.hiringSteps}>
        <HiringSteps />
      </div>
    </div>
  );
}

export default App;
