import React, { useEffect } from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import { useGlobalContext } from "@/context/appContext";
import About from "./About";
import RecentPosts from "./RecentPosts";
import FollowMe from "./FollowMe";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const ToggleNav = () => {
  const { state, setNavToggle } = useGlobalContext();
  const { navToggle, recentPosts } = state;

  useEffect(() => {
    navToggle
      ? document.body.classList.add("overflow_hidden")
      : document.body.classList.remove("overflow_hidden");
  }, [navToggle]);
  return (
    <div className={`${styles.nav_base} ${navToggle && styles.nav_expand}`}>
      <MdClose className={styles.close_icon} onClick={setNavToggle} />
      <ul className={styles.nav_toggle_links}>
        <li>
          <Link href={"/"}>Articles</Link>
        </li>
        <li className="disabled">Categories</li>
        <li className="disabled">Contact</li>
      </ul>
      <About />
      <RecentPosts recentPosts={recentPosts} />
      <FollowMe />
    </div>
  );
};

export default ToggleNav;
