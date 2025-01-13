import React, { useState } from 'react';

function FeaturedCompanies() {
  const companies = [
    { name: 'TCS', logo: 'Tcs.jpg' },
    { name: 'Infosys', logo: 'infosys.png' },
    { name: 'Yash Tech.', logo: 'yash.png' },
    { name: 'Capgemini', logo: 'capgemini.png' },
    { name: 'Cognizant', logo: 'cognizant.png' },
    { name: 'Accenture', logo: 'accenture.png' },
    { name: 'Wipro', logo: 'wipro.png' },
    { name: 'Tech Mahindra', logo: 'techmahindra.png' },
    { name: 'Deloitte', logo: 'Deloitte.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCompanies = companies.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < companies.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white py-10 px-6 rounded">
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured <span className="text-orange-500">Companies</span> hiring now
      </h2>

      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          className="text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={handlePrev}
        >
          &#9664;
        </button>
        <div className="flex space-x-6 overflow-x-auto">
          {visibleCompanies.map((company, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 min-w-[150px] border border-orange-400 rounded-xl p-6 hover:bg-slate-100">
              <img src={company.logo} alt={company.name} className="w-24 h-24 object-contain" />
              <p className="text-lg font-medium">{company.name}</p>
              <a href="#" className="text-green-500 border border-black rounded-xl py-1 px-5 hover:bg-black hover:text-green-300">View Jobs</a>
            </div>
          ))}
        </div>
        <button
          className="text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={handleNext}
        >
          &#9654;
        </button>
      </div>

      <div className="text-center">
        <button className="px-6 py-2 border rounded-full border border-black hover:bg-black hover:text-white">
          View all Cities
        </button>
      </div>
    </div>
  );
}

export default FeaturedCompanies;