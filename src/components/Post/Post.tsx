import { PostText } from "./";

interface PostProps {
  image_url?: string;
  author_image_url: string;
  author_name: string;
  create_date: string;
  title: string;
  content: string;
}

const Post = ({
  image_url,
  author_image_url,
  author_name,
  create_date,
  title,
  content,
}: PostProps) => {
  return (
    <li className="overflow-hidden rounded-lg">
      {image_url && (
        <div className="max-h-80 overflow-hidden flex justify-center items-center">
          <img src={image_url} alt={title} className="w-full" />
        </div>
      )}
      <div className="p-5 text-sm transition-colors bg-gray-100 cursor-pointer hover:bg-gray-50">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <div className="max-w-6">
              <img
                src={author_image_url}
                alt={author_name}
                className="w-full rounded"
              />
            </div>
            <p>{author_name}</p>
          </div>
          <p>{create_date}</p>
        </div>
        <h1 className="text-lg font-medium leading-12">{title}</h1>
        <PostText>{content}</PostText>
      </div>
    </li>
  );
};

export default Post;
