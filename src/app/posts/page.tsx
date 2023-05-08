import Card from "@/components/Card";
import { api } from "@/services/api";


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

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });



  return (
    <div>
      <ul>
        {posts.map((post: IPost) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
