import { Outlet } from "react-router";
import { Footer, Navbar } from "../modules";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
