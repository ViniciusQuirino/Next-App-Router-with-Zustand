import Card from "@/components/Card";
import { api } from "@/services/api";
import qualquerNome from "./styles.module.scss";

export type IPost = {
  id: number;
  title: string;
  description: string;
  content: String[];
};

async function getPosts() {
  try {
    const response = await api.get<IPost[]>("posts");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed");
  }
}


const PostPage = async () => {
  const posts = await getPosts();

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });

  return (
    <ul className={qualquerNome.container}>
      {posts.map((post, index) => {
        const color = index % 2 ? "first" : "second";

        return <Card key={post.id} post={post} color={color} />;
      })}
    </ul>
  );
};

export default PostPage;
