import { api } from "@/services/api";
import React from "react";
import { IPost } from "../page";

interface IPageProps {
  params: { abacaxi: string };
}

export default async function PostPage({ params }: IPageProps) {
  const response = await api.get<IPost>(`/posts/${params.abacaxi}`);
  const post = response.data;

  return (
    <>
      <h1>{post.title}</h1>
      {post.content.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
    </>
  );
}
