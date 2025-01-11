import React from "react";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";
import styles from "./App.module.css";
import { JobsPage } from "./components/JobsPage";

// >>>>>>> 5202aa8e92e7789bc0d53c732e5f2fa68c77ddde

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
      <div className="Jobpage">
        <JobsPage />
      </div>
    </div>
  );
}

export default App;
