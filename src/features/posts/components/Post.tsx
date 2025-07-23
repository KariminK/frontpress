import PostData from "../../../types/Post";

const Post = ({
  image_url,
  author_image_url,
  author_name,
  create_date,
  title,
  content,
}: PostData) => {
  return (
    <li className="overflow-hidden shadow-md rounded-lg">
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
        <h1 className="text-lg font-medium mt-3 mb-2">{title}</h1>
        <p className="font-normal text-gray-700">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </p>
      </div>
    </li>
  );
};

export default Post;
