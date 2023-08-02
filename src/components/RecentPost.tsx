import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import Image from "next/image";

const RecentPost = (props: { recentPost: PostType }) => {
  const { title, img, createdAt } = props.recentPost;
  return (
    <div className={styles.recent_post}>
      <div className={styles.recent_img_container}>
        <Image src={img} alt="recent post" fill />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RecentPost;
