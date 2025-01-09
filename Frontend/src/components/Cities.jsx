import React, { useState } from "react";
import "./Cities.css";

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

  const [startIndex, setStartIndex] = useState(0); // Starting index for carousel
  const [isFullView, setIsFullView] = useState(false); // State for "View All" mode
  const itemsToShow = 5; // Number of city cards to show in the carousel view

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < cities.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleViewAll = () => {
    setIsFullView(true); // Switch to grid view
  };

  const handleShowLess = () => {
    setIsFullView(false); // Return to carousel view
    setStartIndex(0); // Reset carousel to the start
  };

  return (
    <div className="cities-container">
      <h2>Explore jobs in 400+ cities</h2>
      <div className="carousel-wrapper">
        {/* Left Arrow */}
        {!isFullView && startIndex > 0 && (
          <button className="arrow left-arrow" onClick={handlePrevious}>
            &#8249;
          </button>
        )}

        {/* Cities List */}
        <div
          className={`cities-list ${
            isFullView ? "all-cities-grid" : "carousel-container"
          }`}
        >
          {!isFullView
            ? cities
                .slice(startIndex, startIndex + itemsToShow)
                .map((city, index) => (
                  <div className="city-card" key={index}>
                    <img
                      src={city.image}
                      alt={city.name}
                      className="city-image"
                    />
                    <h3>{city.name}</h3>
                    <p>{city.jobs}</p>
                  </div>
                ))
            : cities.map((city, index) => (
                <div className="city-card" key={index}>
                  <img
                    src={city.image}
                    alt={city.name}
                    className="city-image"
                  />
                  <h3>{city.name}</h3>
                  <p>{city.jobs}</p>
                </div>
              ))}
        </div>

        {/* Right Arrow */}
        {!isFullView && startIndex + itemsToShow < cities.length && (
          <button className="arrow right-arrow" onClick={handleNext}>
            &#8250;
          </button>
        )}
      </div>

      {/* View All/Show Less Button */}
      {!isFullView ? (
        <button className="view-all-btn" onClick={handleViewAll}>
          View all cities
        </button>
      ) : (
        <button className="show-less-btn" onClick={handleShowLess}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Cities;
