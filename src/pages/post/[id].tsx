import React from "react";
import { posts } from "@/data";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const postPage = (props: { post: PostType }) => {
  const { title, body, markdown, img, category, createdAt } = props.post;
  const router = useRouter();

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
    <main>
      <div className={`${styles.postBorders} ${background_color}`}>
        <span
          className={styles.go_back_container}
          onClick={() => router.push("/")}
        >
          <IoArrowBackCircleOutline className={styles.go_back} />
        </span>

        <div className={`${styles.postPage}`}>
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
            </div>
            <div className={styles.post_footer}></div>
          </div>
        </div>
        <h1 className={styles.my}>Abstract:</h1>
        <p>{body}</p>
        <h1 className={styles.my}>Article:</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = posts.filter((post: { id: any }) => {
    return post.id == id;
  });
  const post = data[0];
  return {
    props: { post: { ...post } },
    revalidate: 3600,
  };
};

export default postPage;
