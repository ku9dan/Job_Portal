import React from "react";
import styles from "./HiringSteps.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faFileAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const HiringSteps = () => {
  const steps = [
    {
      title: "Create an Account",
      description:
        "Sign up for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests. Voila! You're all set to find your dream jobs.",
      icon: faUser,
    },
    {
      title: "Search Job",
      description:
        "Once you set your job hunting parameters, you'll find many openings related to your career interest on the home page and even filter out some of the best job openings.",
      icon: faSearch,
    },
    {
      title: "Upload CV/ Resume",
      description:
        "From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/Resume and answering a couple of questions, if any.",
      icon: faFileAlt,
    },
    {
      title: "Get Job",
      description:
        "After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.",
      icon: faBriefcase,
    },
  ];

  return (
    <div className={styles.stepsContainer}>
      <h2 className={styles.stepsTitle}>
        Get Hired in{" "}
        <span className={styles.highlight}>4 Quick Easy Steps</span>
      </h2>
      <p className={styles.stepsSubtitle}>
        The quickest and most effective way to get hired by the top firm working
        in your career interest areas.
      </p>
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div
            className={`${styles.stepCard} ${styles[`stepCard${index + 1}`]}`}
            key={index}
          >
            <div
              className={`${styles.stepIcon} ${styles[`stepIcon${index + 1}`]}`}
            >
              <FontAwesomeIcon icon={step.icon} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringSteps;
