import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import RecentPost from "./RecentPost";

const RecentPosts = (props: { recentPosts: PostType[] }) => {
  return (
    <div className={styles.recent_posts}>
      <div className={styles.about_title}>
        <h3>Recent Posts</h3>
      </div>
      {props.recentPosts.map((recentPost) => {
        return <RecentPost recentPost={recentPost} />;
      })}
    </div>
  );
};

export default RecentPosts;
