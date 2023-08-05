import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { socials } from "@/data";

const FollowMe = () => {
  return (
    <div className={styles.recent_posts}>
      <div className={styles.about_title}>
        <h3>Follow Me!</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaFacebookF onClick={() => window.open(socials.fb, "_ blank")} />
        </div>
        <h3>Amine Lech</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaInstagram onClick={() => window.open(socials.insta, "_ blank")} />
        </div>
        <h3>_wr4th</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaGithub onClick={() => window.open(socials.github, "_ blank")} />
        </div>
        <h3>aminelecheheb</h3>
      </div>
      <div className={styles.account}>
        <div className={styles.icon_container}>
          <FaLinkedinIn
            onClick={() => window.open(socials.linkedIn, "_ blank")}
          />
        </div>
        <h3>LinkedIn</h3>
      </div>
    </div>
  );
};

export default FollowMe;
