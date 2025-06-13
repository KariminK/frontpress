import { JSX } from "react";
import { Footer, Header, Navbar } from "../modules";
import { PostList } from "../components";

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <Header />
      <PostList>{children}</PostList>
      <Footer />
    </>
  );
};

export default DefaultLayout;
