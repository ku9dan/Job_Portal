import React from "react";

function JobCard({
  company,
  timing,
  position,
  location,
  employmentType,
  description,
  skills = [], // Default value for skills
  salary,
  companyLogo,
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-2">
        {/* Logo Container */}
        <div className="w-12 h-12 rounded-lg bg-indigo-900 flex items-center justify-center flex-shrink-0">
          {companyLogo || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>

        {/* Company Name and Timing on the Right Side of the Logo */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
          <h6 className="text-sm font-semibold text-gray-900">{timing}</h6>
        </div>
      </div>

      {/* Remaining Details Below the Logo */}
      <div className="mt-2">
        <h4 className="text-xl font-semibold text-orange-500">{position}</h4>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
        {salary && (
          <p className="text-sm text-gray-700 mt-1 font-medium">
            Salary: {salary}
          </p>
        )}
        <p className="text-gray-600 mt-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
