import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        {/* Logo and Contact Info */}
        <div>
          <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </div>
          <div className={styles.textContainer}>
            <p>
              <span>Address:</span> Palam, New Delhi,
              <div>Delhi 110077</div>
            </p>
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:info@uptoskills.com">info@uptoskills.com</a>
            </p>
            <p>
              <span>Phone:</span> <a href="tel:+919319772294">+91-9319772294</a>
            </p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className={styles.sectionHeading}>Links</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="#">Home</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#">About Us</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#">Services</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className={styles.sectionHeading}>Services</h3>
          <ul className={styles.linkList}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className={styles.sectionHeading}>Courses</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Data Science Courses</a>
            </li>
            <li>
              <a href="#">AI & Machine Learning Courses</a>
            </li>
            <li>
              <a href="#">Digital Marketing Courses</a>
            </li>
            <li>
              <a href="#">Cloud Computing Courses</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Social Media and Email Subscription */}
      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className={styles.emailForm}>
          <input
            type="email"
            placeholder="Email"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
