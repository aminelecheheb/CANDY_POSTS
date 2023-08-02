import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import Image from "next/image";
import avatar from "../../public/avatar.svg";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_title}>
        <h3>About Me</h3>
      </div>
      <div className={styles.top_flex}>
        <div className={styles.img_container}>
          <Image src={avatar} alt="avatar" fill />
        </div>
        <div className={styles.infos}>
          <h4>Amine Lecheheb</h4>
          <p>Full stack developer</p>
          <div className={styles.personal_social}>
            <FaFacebookF />
            <FaGithub />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <p className={styles.about_description}>
        Talented full stack developer from Algeria. Proficient in the MERN stack
        and react native for cross platform apps, crafting impactful solutions
        that push technological boundaries. Let's create together!
      </p>
    </div>
  );
};

export default About;
