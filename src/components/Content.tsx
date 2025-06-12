import Post from "./Post";

const Content = () => {
  return (
    <main>
      <ul className="grid grid-cols-2 gap-5">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </main>
  );
};

export default Content;
