import React from 'react';
import { Eye, Clock, Users, ArrowUpRight } from 'lucide-react';
import styles from './JobCard.module.css';

export const JobCard = ({
  type,
  title,
  company,
  location,
  workType,
  views,
  daysLeft,
  applied,
  logoUrl,
}) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.cardHeader}>
        <img
          src={logoUrl}
          alt={company}
          className={styles.logo}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.badges}>
          <span className={styles.badge}>{location}</span>
          <span className={styles.badge}>{workType}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Eye size={16} />
            {views.toLocaleString()} Views
          </div>
          {applied ? (
            <div className={styles.stat}>
              <Users size={16} />
              {applied} Applied
            </div>
          ) : (
            <div className={styles.stat}>
              <Clock size={16} />
              {daysLeft} days left
            </div>
          )}
        </div>
        <ArrowUpRight className={styles.arrow} size={20} />
      </div>
    </div>
  );
};