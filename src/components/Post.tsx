import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Post = (props: { post: PostType }) => {
  const { title, body, img, createdAt, category, id } = props.post;

  let background_color = `${styles.background_color_4}`;
  if (category === "travel") {
    background_color = `${styles.background_color_3}`;
  }
  if (category === "health") {
    background_color = `${styles.background_color_4}`;
  }
  if (category === "technologie") {
    background_color = `${styles.background_color_5}`;
  }

  return (
    <div className={`${styles.post} ${background_color}`}>
      <div className={styles.post_img_container}>
        <Image src={img} alt="post image" fill className={styles.img} />
      </div>
      <div className={styles.post_infos}>
        <div className={styles.post_head}>
          <span className={styles.category}>{category}</span>
          <span>{createdAt}</span>
        </div>
        <div className={styles.post_body}>
          <h1>{title}</h1>
          <p>{body.slice(0, 200)}...</p>
        </div>
        <div className={styles.post_footer}>
          <Link href={`/post/${id}`}>
            <button>Continue reading</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
