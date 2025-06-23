import { ReactNode } from "react";
import { Footer, Header, Navbar } from "../modules";
import { PostList } from "../components";

const DefaultLayout = ({ children }: { children: ReactNode[] }) => {
  return (
    <>
      <Navbar />
      <Header />
      <PostList>{...children}</PostList>
      <Footer />
    </>
  );
};

export default DefaultLayout;
