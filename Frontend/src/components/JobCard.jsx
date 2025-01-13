import React from 'react';
import { Briefcase } from 'lucide-react';

const JobCard = ({
  company,
  timing,
  position,
  location,
  employmentType,
  description,
  skills = [], // Default value to avoid undefined errors
  salary,
  companyLogo,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-110 transition-all">
      <div className="flex items-start gap-4">
        {/* Company Logo or Default Icon */}
        <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
          {companyLogo ? (
            <img src={companyLogo} alt={`${company} logo`} className="w-full h-full rounded-lg object-cover" />
          ) : (
            <Briefcase className="w-6 h-6 text-white" />
          )}
        </div>

        {/* Company Name and Timing */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
          <h6 className="text-sm text-gray-900">{timing}</h6>
        </div>
      </div>

      {/* Position and Other Details */}
      <div className="mt-2">
        <h4 className="text-xl font-semibold text-orange-500">{position}</h4>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-500">{employmentType}</p>

        {/* Salary (Conditional Rendering) */}
        {salary && (
          <p className="text-sm text-gray-700 mt-1 font-medium">
            Salary: {salary}
          </p>
        )}

        {/* Job Description */}
        <p className="text-gray-600 mt-3 text-sm">{description}</p>

        {/* Skills (Conditional Rendering) */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index} // Use index as key if skill names are not unique
                className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;