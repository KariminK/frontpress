import { PostData } from "../../../types/post";
import Post from "./Post";

const PostList = ({ posts }: { posts: PostData[] }) => {
  const postElements = posts.map((post) => {
    return (
      <Post
        author_image_url={post.author_image_url}
        title={post.title}
        content={post.content}
        author_name={post.author_name}
        image_url={post.image_url}
        create_date={post.create_date}
      />
    );
  });

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">{...postElements}</ul>
  );
};

export default PostList;
