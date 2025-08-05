import { Footer, Header, Navbar } from "../components/modules";
import { PostList } from "../features/posts";
import { useAuth } from "../hooks";

const Dashboard = () => {
  const posts = [
    {
      author_image_url:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.01KN2h4XIvSR_7-hNO7bOgHaGl%26pid%3DApi&sp=1750698796T1b88c0cb549c62fb0853e4480d5bf40a5f1dfa6c63497c5e7b7b2e04fc0cfe3d",
      title: "lorem ipsum",
      content: "lorem dolor sit amet",
      author_name: "Gabe Newell",
      image_url:
        "https://pbs.twimg.com/media/GuFlCoeW4AE1_su?format=jpg&name=4096x4096",
      create_date: "20/24/2005",
    },
    {
      author_image_url:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.01KN2h4XIvSR_7-hNO7bOgHaGl%26pid%3DApi&sp=1750698796T1b88c0cb549c62fb0853e4480d5bf40a5f1dfa6c63497c5e7b7b2e04fc0cfe3d",
      title: "lorem ipsum",
      content: "lorem dolor sit amet",
      author_name: "Gabe Newell",
      image_url:
        "https://pbs.twimg.com/media/GuFlCoeW4AE1_su?format=jpg&name=4096x4096",
      create_date: "20/24/2005",
    },
    {
      author_image_url:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.01KN2h4XIvSR_7-hNO7bOgHaGl%26pid%3DApi&sp=1750698796T1b88c0cb549c62fb0853e4480d5bf40a5f1dfa6c63497c5e7b7b2e04fc0cfe3d",
      title: "lorem ipsum",
      content: "lorem dolor sit amet",
      author_name: "Gabe Newell",
      image_url:
        "https://pbs.twimg.com/media/GuFlCoeW4AE1_su?format=jpg&name=4096x4096",
      create_date: "20/24/2005",
    },
    {
      author_image_url:
        "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.01KN2h4XIvSR_7-hNO7bOgHaGl%26pid%3DApi&sp=1750698796T1b88c0cb549c62fb0853e4480d5bf40a5f1dfa6c63497c5e7b7b2e04fc0cfe3d",
      title: "lorem ipsum",
      content: "lorem dolor sit amet",
      author_name: "Gabe Newell",
      image_url:
        "https://pbs.twimg.com/media/GuFlCoeW4AE1_su?format=jpg&name=4096x4096",
      create_date: "20/24/2005",
    },
  ];
  const token = useAuth();
  return (
    <>
      <Navbar />
      <Header />
      {token && <h1>Welcome back, karimin</h1>}
      <PostList posts={posts} />
      <Footer />
    </>
  );
};

export default Dashboard;
