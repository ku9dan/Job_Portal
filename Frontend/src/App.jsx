import React from "react";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";
import styles from "./App.module.css";
import JobCardPage from './components/JobCardPage';
import FeaturedCompanies from "./components/FeaturedCompanies";
// import QualificationPopup from "./components/QualificationPopup";

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
      <div>
        <JobCardPage />
      </div>
      {/* <div>
        <QualificationPopup />
      </div> */}
      <div>
        <FeaturedCompanies />
      </div>
    </div>

  );
}

export default App;
