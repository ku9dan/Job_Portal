import React, { useState } from "react";
import styles from "./Cities.module.css";

const Cities = () => {
  const cities = [
    { name: "Mumbai", jobs: "30K+ Jobs", image: "Mumbai.jpg" },
    { name: "Bangalore", jobs: "20K+ Jobs", image: "Bangalore.webp" },
    { name: "Delhi", jobs: "20K+ Jobs", image: "Delhi.avif" },
    { name: "Hyderabad", jobs: "10K+ Jobs", image: "Hyderabad.webp" },
    { name: "Chennai", jobs: "10K+ Jobs", image: "Chennai.webp" },
    { name: "Ahmedabad", jobs: "10K+ Jobs", image: "Ahmedabad.jpg" },
    { name: "Indore", jobs: "20K+ Jobs", image: "Indore.jpg" },
    { name: "Jaipur", jobs: "10K+ Jobs", image: "Jaipur.jpg" },
    { name: "Kolkata", jobs: "30K+ Jobs", image: "Kolkata.jpg" },
    { name: "Lucknow", jobs: "20K+ Jobs", image: "Lucknow.jpg" },
    { name: "Patna", jobs: "10K+ Jobs", image: "Patna.jpg" },
    { name: "Pune", jobs: "10K+ Jobs", image: "pune.avif" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const itemsToShow = 5;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < cities.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleViewAll = () => {
    setIsFullView(true);
  };

  const handleShowLess = () => {
    setIsFullView(false);
    setStartIndex(0);
  };

  return (
    <div className={styles.citiesContainer}>
      <h2>Explore jobs in 400+ cities</h2>
      <div className={styles.carouselWrapper}>
        {!isFullView && startIndex > 0 && (
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={handlePrevious}
          >
            &#8249;
          </button>
        )}

        <div
          className={`${styles.citiesList} ${
            isFullView ? styles.allCitiesGrid : styles.carouselContainer
          }`}
        >
          {!isFullView
            ? cities
                .slice(startIndex, startIndex + itemsToShow)
                .map((city, index) => (
                  <div className={styles.cityCard} key={index}>
                    <img
                      src={city.image}
                      alt={city.name}
                      className={styles.cityImage}
                    />
                    <h3>{city.name}</h3>
                    <p>{city.jobs}</p>
                  </div>
                ))
            : cities.map((city, index) => (
                <div className={styles.cityCard} key={index}>
                  <img
                    src={city.image}
                    alt={city.name}
                    className={styles.cityImage}
                  />
                  <h3>{city.name}</h3>
                  <p>{city.jobs}</p>
                </div>
              ))}
        </div>

        {!isFullView && startIndex + itemsToShow < cities.length && (
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={handleNext}
          >
            &#8250;
          </button>
        )}
      </div>

      {!isFullView ? (
        <button className={styles.viewAllBtn} onClick={handleViewAll}>
          View all cities
        </button>
      ) : (
        <button className={styles.showLessBtn} onClick={handleShowLess}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Cities;
