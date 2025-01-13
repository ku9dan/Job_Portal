import React, { useState } from "react";

function FeaturedCompanies() {
  const companies = [
    { name: "TCS", logo: "/Tcs.jpg" },
    { name: "Infosys", logo: "/infosys.png" },
    { name: "Yash Tech.", logo: "/yash.png" },
    { name: "Capgemini", logo: "/capgemini.png" },
    { name: "Cognizant", logo: "/cognizant.png" },
    { name: "Accenture", logo: "/accenture.png" },
    { name: "Wipro", logo: "/wipro.png" },
    { name: "Tech Mahindra", logo: "/techmahindra.png" },
    { name: "Deloitte", logo: "/Deloitte.png" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isViewAll, setIsViewAll] = useState(false);

  const itemsToShow = isViewAll ? companies.length : 5;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < companies.length ? prevIndex + 1 : prevIndex
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
    <div className="bg-white py-10 px-6 rounded">
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured <span className="text-orange-500">Companies</span> hiring now
      </h2>
      <div className="relative flex items-center justify-between">
        {/* Previous Button */}
        {startIndex > 0 && !isViewAll && (
          <button
            className="absolute left-4 text-3xl p-3 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
            onClick={handlePrevious}
          >
            &#8249;
          </button>
        )}

        {/* Company Cards */}
        <div className="flex items-center justify-center space-x-8 overflow-hidden w-full px-16">
          {companies
            .slice(startIndex, startIndex + itemsToShow)
            .map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 w-[200px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-32 h-32 object-contain"
                />
                <p className="text-lg font-semibold">{company.name}</p>
                <a
                  href="#"
                  className="text-green-400 p-1 font-medium hover:border-b-2 hover:border-green-400 rounded-xl transition-all delay-100"
                >
                  View Jobs
                </a>
              </div>
            ))}
        </div>

        {/* Next Button */}
        {startIndex + itemsToShow < companies.length && !isViewAll && (
          <button
            className="absolute right-4 text-3xl p-3 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
            onClick={handleNext}
          >
            &#8250;
          </button>
        )}
      </div>

      {/* View All / Show Less Button */}
      <div className="text-center mt-12">
        <button
          className="px-10 py-3 border rounded-full border-black hover:bg-black hover:text-white transition"
          onClick={handleViewAllToggle}
        >
          {isViewAll ? "Show Less" : "View All Companies"}
        </button>
      </div>
    </div>
  );
}

export default FeaturedCompanies;
