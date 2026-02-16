import { Footer, Navbar } from "@/components/modules";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
