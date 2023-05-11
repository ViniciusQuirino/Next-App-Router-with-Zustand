import { api } from "@/services/api";
import React from "react";
import { IPost } from "../page";

interface IPageProps {
  params: { id: string };
}

// tempo de atualização da pagina estatica - variavel tem que ser do mesmo nome - important
export const revalidate = 30;

export async function generateStaticParams() {
  const response = await api.get<IPost[]>("/posts", {
    params: {
      _limit: 5,
      _page: 1,
    },
  });

  return response.data.map((post) => ({ id: post.id + "" }));
}

export default async function PostPage({ params }: IPageProps) {
  const response = await api.get<IPost>(`/posts/${params.id}`);
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
