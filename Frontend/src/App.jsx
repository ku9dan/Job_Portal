import React from "react";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import HiringSteps from "./components/HiringSteps";
import styles from "./App.module.css";
import JobCardPage from "./components/JobCardPage";
import Rating from "./components/Rating";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Navbar from "./components/Navbar";

// import QualificationPopup from "./components/QualificationPopup";

// >>>>>>> 5202aa8e92e7789bc0d53c732e5f2fa68c77ddde

function App() {
  return (
    <div className={styles.jobportalContainer}>
      <div className="container">
        <Navbar />
      </div>
      <div className={styles.heroSection}>
        <HeroSection />
      </div>
      <div className={styles.jobcardpage}>
        <JobCardPage />
      </div>
      <div className={styles.cities}>
        <Cities />
      </div>
      <div className={styles.featuredcompanies}>
        <FeaturedCompanies />
      </div>
      <div className={styles.hiringSteps}>
        <HiringSteps />
      </div>
      <div className={styles.faqpage}>
        <FAQPage />
      </div>
      <div className={styles.rating}>
        <Rating />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {/* <div>
        <QualificationPopup />
      </div> */}
    </div>
  );
}

export default App;
