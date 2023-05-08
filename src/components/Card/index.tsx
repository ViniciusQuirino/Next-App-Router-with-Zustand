"use client";

import { useEffect } from "react";

export default function Card({ post }: any) {
  useEffect(() => {
    console.log("test");
  }, []);

  return <li key={post.id}>{post.title}</li>;
}
