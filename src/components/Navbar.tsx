import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2>Logo</h2>
      <div className={styles.nav_center}>
        <ul className={styles.links_container}>
          <li>Home</li>
          <li>Link1</li>
          <li>Link2</li>
        </ul>
      </div>
      <div className={styles.socials}>
        <FaFacebookF />
        <FaGithub />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Navbar;
