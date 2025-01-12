import React, { useState } from "react";
import JobCard from "./JobCard";
const JobCardPage = () => {
  // Sample job data
  const jobs = [
    {
      company: "Tech Corp",
      timing: "Full-time",
      position: "Software Engineer",
      location: "Delhi, India",
      employmentType: "Full-time",
      description:
        "Work on cutting-edge technologies and build scalable applications.",
      skills: ["JavaScript", "React", "Node.js"],
      salary: "$100,000",
      companyLogo: null,
    },
    {
      company: "Design Studio",
      timing: "Full-time",
      position: "UI/UX Designer",
      location: "Hyderabad, India",
      employmentType: "Contract",
      description:
        "Design intuitive and user-friendly interfaces for web and mobile applications.",
      skills: ["Figma", "Sketch", "Adobe XD"],
      salary: "$80,000",
      companyLogo: null,
    },
    {
      company: "Data Solutions",
      timing: "Full-time",
      position: "Data Scientist",
      location: "Bangalore, India",
      employmentType: "Full-time",
      description: "Analyze large datasets and build predictive models.",
      skills: ["Python", "Machine Learning", "SQL"],
      salary: "$120,000",
      companyLogo: null,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      salary: "$70,000",
      companyLogo: null,
    },
    {
      company: "Finance Firm",
      timing: "Full-time",
      position: "Financial Analyst",
      location: "Mumbai, India",
      employmentType: "Full-time",
      description:
        "Analyze financial data and prepare reports for senior management.",
      skills: ["Financial Modeling", "Excel", "Accounting"],
      salary: "$90,000",
      companyLogo: null,
    },
    {
      company: "IT Consulting",
      timing: "Remote",
      position: "IT Support Specialist",
      location: "Chennai, India",
      employmentType: "Contract",
      description:
        "Provide technical support and troubleshooting for hardware and software issues.",
      skills: ["Windows", "MacOS", "Networking"],
      salary: "$60,000",
      companyLogo: null,
    },
    {
      company: "Tech Innovators",
      timing: "Full-time",
      position: "Software Engineer",
      location: "San Francisco, USA",
      employmentType: "Permanent",
      description:
        "Develop and maintain scalable software solutions for enterprise clients.",
      skills: ["JavaScript", "React", "Node.js", "AWS"],
      salary: "$120,000",
      companyLogo: "null",
    },
    {
      company: "HealthTech Solutions",
      timing: "Part-time",
      position: "Data Analyst",
      location: "London, UK",
      employmentType: "Contract",
      description:
        "Analyze healthcare data to provide insights and improve patient outcomes.",
      skills: ["Python", "SQL", "Tableau", "Data Visualization"],
      salary: "$50,000",
      companyLogo: null,
    },
    {
      company: "Green Energy Corp",
      timing: "Remote",
      position: "Renewable Energy Consultant",
      location: "Berlin, Germany",
      employmentType: "Freelance",
      description:
        "Advise clients on renewable energy solutions and sustainability practices.",
      skills: ["Energy Management", "Sustainability", "Project Management"],
      salary: "$80,000",
      companyLogo: "null",
    },
    {
      company: "EduTech Global",
      timing: "Full-time",
      position: "Instructional Designer",
      location: "Sydney, Australia",
      employmentType: "Permanent",
      description:
        "Design and develop engaging e-learning content for global audiences.",
      skills: [
        "Articulate Storyline",
        "Learning Management Systems",
        "Instructional Design",
      ],
      salary: "$75,000",
      companyLogo: null,
    },
    {
      company: "FinTech Pro",
      timing: "Remote",
      position: "Blockchain Developer",
      location: "Toronto, Canada",
      employmentType: "Contract",
      description:
        "Build and maintain blockchain-based financial applications.",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "Cryptography"],
      salary: "$110,000",
      companyLogo: "null",
    },
    {
      company: "Creative Media Agency",
      timing: "Part-time",
      position: "Graphic Designer",
      location: "New York, USA",
      employmentType: "Freelance",
      description:
        "Create visually appealing designs for digital and print media.",
      skills: ["Adobe Photoshop", "Illustrator", "UI/UX Design", "Branding"],
      salary: "$45,000",
      companyLogo: null,
    },
    // Add more jobs as needed
  ];

  // State to manage visibility of jobs
  const [showAllJobs, setShowAllJobs] = useState(false);

  // Function to toggle job visibility
  const toggleJobVisibility = () => {
    setShowAllJobs(!showAllJobs);
  };

  // Determine which jobs to display
  const jobsToDisplay = showAllJobs ? jobs : jobs.slice(0, 4);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Latest Featured Jobs
      </h1>
      <h3 className="text-l text-gray-900 mb-8">
        Find the Jobs/Internships that fits your career aspiration
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobsToDisplay.map((job, index) => (
          <JobCard
            key={index}
            company={job.company}
            timing={job.timing}
            position={job.position}
            location={job.location}
            employmentType={job.employmentType}
            description={job.description}
            skills={job.skills}
            salary={job.salary}
            companyLogo={job.companyLogo}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleJobVisibility}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {showAllJobs ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default JobCardPage;
