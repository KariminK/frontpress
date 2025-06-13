const PostText = ({ children }: { children: string }) => {
  const visible_content =
    children.length > 100 ? children.slice(0, 100) + "..." : children;
  return (
    <p className="font-normal text-gray-700 min-h-12">{visible_content}</p>
  );
};

export default PostText;
