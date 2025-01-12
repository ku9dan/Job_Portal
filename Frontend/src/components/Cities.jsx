// import React, { useState } from "react";
// import styles from "../styles/Cities.module.css";

// const Cities = () => {
//   const cities = [
//     { name: "Mumbai", jobs: "10k jobs", image: "Mumbai.jpg" },
//     { name: "Bangalore", jobs: "10k jobs", image: "Bangalore.webp" },
//     { name: "Delhi", jobs: "10k jobs", image: "Delhi.avif" },
//     { name: "Hyderabad", jobs: "10k jobs", image: "Hyderabad.webp" },
//     { name: "Chennai", jobs: "10k jobs", image: "Chennai.webp" },
//     { name: "Ahmedabad", jobs: "10k jobs", image: "Ahmedabad.jpg" },
//   ];

//   const [startIndex, setStartIndex] = useState(0);
//   const itemsToShow = 5;

//   const handleNext = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex + itemsToShow < cities.length ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePrevious = () => {
//     setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   };

//   return (
//     <div className={styles.citiesContainer}>
//       <h2 className={styles.heading}>
//         Explore jobs in <span>400+ cities</span>
//       </h2>
//       <p className={styles.subHeading}>
//         Find the jobs/Internship that fits your career aspirations
//       </p>
//       <div className={styles.carouselWrapper}>
//         {startIndex > 0 && (
//           <button
//             className={`${styles.arrow} ${styles.leftArrow}`}
//             onClick={handlePrevious}
//           >
//             &#8249;
//           </button>
//         )}

//         <div className={styles.citiesList}>
//           {cities
//             .slice(startIndex, startIndex + itemsToShow)
//             .map((city, index) => (
//               <div className={styles.cityCard} key={index}>
//                 <div className={styles.cityImageWrapper}>
//                   <img
//                     src={city.image}
//                     alt={city.name}
//                     className={styles.cityImage}
//                   />
//                 </div>
//                 <h3 className={styles.cityName}>{city.name}</h3>
//                 <p className={styles.cityJobs}>{city.jobs}</p>
//               </div>
//             ))}
//         </div>

//         {startIndex + itemsToShow < cities.length && (
//           <button
//             className={`${styles.arrow} ${styles.rightArrow}`}
//             onClick={handleNext}
//           >
//             &#8250;
//           </button>
//         )}
//       </div>
//       <button className={styles.viewAllBtn}>View all Cities</button>
//     </div>
//   );
// };

// export default Cities;

import React, { useState } from "react";
import styles from "../styles/Cities.module.css";

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
  const [isViewAll, setIsViewAll] = useState(false);

  const itemsToShow = isViewAll ? cities.length : 5;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < cities.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleViewAllToggle = () => {
    setIsViewAll((prevState) => !prevState);
    setStartIndex(0);
  };

  return (
    <div className={styles.citiesContainer}>
      <h2 className={styles.heading}>
        Explore jobs in <span>400+ cities</span>
      </h2>
      <p className={styles.subHeading}>
        Find the jobs/Internship that fits your career aspirations
      </p>
      <div className={styles.carouselWrapper}>
        {startIndex > 0 && !isViewAll && (
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={handlePrevious}
          >
            &#8249;
          </button>
        )}
        <div className={styles.citiesList}>
          {cities
            .slice(startIndex, startIndex + itemsToShow)
            .map((city, index) => (
              <div className={styles.cityCard} key={index}>
                <div className={styles.cityImageWrapper}>
                  <img
                    src={city.image}
                    alt={city.name}
                    className={styles.cityImage}
                  />
                </div>
                <h3 className={styles.cityName}>{city.name}</h3>
                <p className={styles.cityJobs}>{city.jobs}</p>
              </div>
            ))}
        </div>
        {startIndex + itemsToShow < cities.length && !isViewAll && (
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={handleNext}
          >
            &#8250;
          </button>
        )}
      </div>
      <button className={styles.viewAllBtn} onClick={handleViewAllToggle}>
        {isViewAll ? "Show Less" : "View All Cities"}
      </button>
    </div>
  );
};

export default Cities;
