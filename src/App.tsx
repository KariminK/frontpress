// import { Post } from "./components";
import "./index.css";
// import { DefaultLayout } from "./layouts";
import LoginLayout from "./layouts/LoginLayout";
function App() {
  return (
    <>
      {/* <DefaultLayout>
        <Post
          author_image_url="xyz"
          title="lorem ipsum"
          content="lorem dolor sit amet"
          author_name="noone"
          create_date="20/24/2005"
        />
      </DefaultLayout> */}
      <LoginLayout />
    </>
  );
}

export default App;
