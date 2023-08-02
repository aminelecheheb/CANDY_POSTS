import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className={styles.recent_posts}>
      <div className={styles.about_title}>
        <h3>Follow Me!</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaFacebookF />
        </div>
        <h3>Facebook</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaInstagram />
        </div>
        <h3>Instagram</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaGithub />
        </div>
        <h3>Github</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaLinkedinIn />
        </div>
        <h3>LinkedIn</h3>
      </div>
    </div>
  );
};

export default FollowMe;
