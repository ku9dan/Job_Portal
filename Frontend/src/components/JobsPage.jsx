import React from "react";
import {
  Briefcase,
  GraduationCap,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { JobCard } from "./JobCard";
import styles from "../styles/JobsPage.module.css";

const jobsData = [
  {
    type: "green",
    title: "Regional Sales Manager (B2B)",
    company: "Kamlesh Metal & Alloy",
    location: "Online",
    workType: "Free",
    views: 1766,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "yellow",
    title: "Customer Service Executive",
    company: "Izeon Innovative Pvt Ltd",
    location: "Online",
    workType: "Free",
    views: 2584,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "green",
    title: "Flutter Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 1500,
    applied: 8,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "pink",
    title: "SpringBoot Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 2100,
    applied: 18,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "green",
    title: "React Native Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 1200,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "yellow",
    title: "NodeJS Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 1900,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "green",
    title: "React Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 1500,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
  {
    type: "pink",
    title: "Angular Developer",
    company: "Izeon Innovative Pvt Ltd",
    location: "In Office",
    workType: "Free",
    views: 2100,
    daysLeft: 29,
    logoUrl: "https://via.placeholder.com/48?text=Design+Company",
  },
];

export const JobsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Browse Popular Jobs</h1>
        <p className={styles.subtitle}>
          Find the job/Internship that fits your career aspirations.
        </p>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>
          <Briefcase size={20} />
          Jobs
        </button>
        <button className={styles.tab}>
          <GraduationCap size={20} />
          Internships
        </button>
        <button className={styles.tab}>
          <Brain size={20} />
          Hiring Challenges
        </button>
      </div>

      <div className={styles.grid}>
        {jobsData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton}>
          <ChevronLeft size={20} />
        </button>
        <button className={styles.navButton}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
