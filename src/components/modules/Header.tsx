import { useAuth } from "../../hooks";
import { Button } from "../ui";

const Header = () => {
  const user = useAuth();
  return (
    <header>
      {user === null ? (
        <h1 className="text-2xl leading-15">Sign in to become creator</h1>
      ) : (
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl leading-15">Welcome back, {}</h1>
          <Button>Create post</Button>
        </div>
      )}
      <h2 className="text-xl my-3">Most recent posts</h2>
    </header>
  );
};

export default Header;
