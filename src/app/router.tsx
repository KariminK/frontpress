import { Route, Routes } from "react-router";
import { LoginForm, RegisterForm } from "@/features/auth";
import { PostDetails, PostList } from "@/features/posts";
import { HomeLayout, LandingLayout } from "@/components/layouts";

export default function Router() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/home" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetails />}></Route>
      </Route>
    </Routes>
  );
}
