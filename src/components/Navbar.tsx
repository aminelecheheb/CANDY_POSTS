import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "@/context/appContext";

const Navbar = () => {
  const { state, setNavToggle } = useGlobalContext();
  const { navToggle } = state;
  return (
    <div className={styles.navbar}>
      <h2>Logo</h2>
      <div className={styles.nav_center}>
        <ul className={styles.links_container}>
          <li>Articles</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.socials}>
        <FaFacebookF />
        <FaGithub />
        <FaLinkedinIn />
      </div>
      <AiOutlineMenu className={styles.toggle} onClick={setNavToggle} />
    </div>
  );
};

export default Navbar;
