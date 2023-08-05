import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { socials } from "@/data";
import me from "../../public/me.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_title}>
        <h3>About Me</h3>
      </div>
      <div className={styles.top_flex}>
        <div className={styles.img_container}>
          <Image className={styles.img} src={me} alt="avatar" fill />
        </div>
        <div className={styles.infos}>
          <h4>Amine Lecheheb</h4>
          <p>Full stack developer</p>
          <div className={styles.personal_social}>
            <FaFacebookF onClick={() => window.open(socials.fb, "_ blank")} />
            <FaGithub onClick={() => window.open(socials.github, "_ blank")} />
            <FaLinkedinIn
              onClick={() => window.open(socials.linkedIn, "_ blank")}
            />
          </div>
        </div>
      </div>
      <p className={styles.about_description}>
        Talented full stack developer from Algeria. Proficient in the MERN stack
        and react native for cross platform apps, crafting impactful solutions
        that push technological boundaries. Let's create together!
      </p>
      <Link
        className={styles.portfolio_btn}
        href={"https://aminelecheheb.vercel.app/"}
      >
        Potfolio <BsArrowRightShort className={styles.icon} />
      </Link>
    </div>
  );
};

export default About;
