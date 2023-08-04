import React from "react";
import styles from "@/styles/Nav-side-bar.module.css";
import Image from "next/image";
import Link from "next/link";

const RecentPost = (props: { recentPost: PostType }) => {
  const { title, img, createdAt, id } = props.recentPost;
  return (
    <Link href={`/post/${id}`}>
      <div className={styles.recent_post}>
        <div className={styles.recent_img_container}>
          <Image src={img} alt="recent post" fill />
        </div>
        <div>
          <h3>{title.slice(1, 40)}...</h3>
          <p>{createdAt}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentPost;
