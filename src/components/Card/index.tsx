"use client";

import styles from "./styles.module.scss";
import { IPost } from "@/app/posts/page";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { TestContext } from "@/providers/TestContext";

interface ICardProps {
  post: IPost;
  color: "first" | "second";
}

export default function Card({ post, color }: ICardProps) {
  const { teste } = useContext<any>(TestContext);

  const liElement = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const liCurrent = liElement.current;
    if (!liCurrent) return;


    const sizeRow = liCurrent.offsetHeight / 15

    const sizeRowFloor = Math.floor(sizeRow)

    liCurrent.style.gridRowEnd = `span ${sizeRowFloor}`;

  }, []);

  return (
    <li
      ref={liElement}
      className={styles.container}
      key={post.id}
      data-color={color}
    >
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/posts/${post.id}`}>Acessar</Link>
    </li>
  );
}
