import React, { useState } from 'react';

function QualificationPopup() {
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [selectedSubQualification, setSelectedSubQualification] = useState(null);

  const qualifications = ["10 or Below", "12th Pass", "Diploma", "ITI", "Graduate", "Post Graduate"];
  const subQualifications = [
    "B.Tech - Computer Science",
    "B.Tech - Electrical Engineering",
    "B.Tech - Electronics Engineering",
    "B.Tech - Civil Engineering",
    "B.Tech - Mechanical Engineering",
    "B.Pharma",
    "BCA",
    "BBA",
    "BA",
    "B.Com",
    "BSC",
  ];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Select Qualification</h2>

        <div className="mb-4">
          <h3 className="text-lg text-green-500 font-medium">Graduation</h3>
          <div className="flex flex-wrap gap-2">
            {qualifications.map((qualification, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full border ${
                  selectedQualification === qualification ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                }`}
                onClick={() => setSelectedQualification(qualification)}
              >
                {qualification}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg text-green-500 font-medium">Select Sub-Qualification</h3>
          <div className="flex flex-wrap gap-2">
            {subQualifications.map((subQualification, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full border ${
                  selectedSubQualification === subQualification ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                }`}
                onClick={() => setSelectedSubQualification(subQualification)}
              >
                {subQualification}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <button
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
            onClick={() => {
              setSelectedQualification(null);
              setSelectedSubQualification(null);
            }}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
            onClick={() => console.log('Saved')}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default QualificationPopup;
