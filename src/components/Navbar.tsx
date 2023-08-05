import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "@/context/appContext";
import Link from "next/link";
import { socials } from "@/data";

const Navbar = () => {
  const { state, setNavToggle } = useGlobalContext();
  return (
    <div className={styles.navbar}>
      <h2>Logo</h2>
      <div className={styles.nav_center}>
        <ul className={styles.links_container}>
          <li>
            <Link href={"/"}>Articles</Link>
          </li>
          <li className="disabled">Categories</li>
          <li className="disabled">Contact</li>
        </ul>
      </div>
      <div className={styles.socials}>
        <FaFacebookF onClick={() => window.open(socials.fb, "_ blank")} />
        <FaGithub onClick={() => window.open(socials.github, "_ blank")} />
        <FaLinkedinIn
          onClick={() => window.open(socials.linkedIn, "_ blank")}
        />
      </div>
      <AiOutlineMenu className={styles.toggle} onClick={setNavToggle} />
    </div>
  );
};

export default Navbar;
