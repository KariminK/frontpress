import { JSX } from "react";

const PostList = ({ children }: { children: JSX.Element }) => {
  return <ul className="grid grid-cols-1 md:grid-cols-2">{children}</ul>;
};

export default PostList;
