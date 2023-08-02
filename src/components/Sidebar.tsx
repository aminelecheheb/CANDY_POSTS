import React, { useState } from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import About from "./About";
import { posts } from "@/data";
import RecentPosts from "./RecentPosts";
import FollowMe from "./FollowMe";

const Sidebar = () => {
  const [recentPosts, setRecentPosts] = useState(posts.slice(0, 3));
  return (
    <div className={styles.sidebar}>
      <About />
      <RecentPosts recentPosts={recentPosts} />
      <FollowMe />
    </div>
  );
};

export default Sidebar;
