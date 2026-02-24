import { Navigate, Route, Routes } from "react-router";
import { LoginForm, RegisterForm, useAuth } from "@/features/auth";
import { CreatePostForm, PostDetails, PostList } from "@/features/posts";
import { HomeLayout, LandingLayout } from "@/components/layouts";

// TODO: CHECK IF TOKEN IS VALID

export default function Router() {
  const auth = useAuth();
  return (
    <Routes>
      {auth?.token ? (
        <>
          <Route index element={<Navigate to={"/home"} />} />
          <Route path="/register" element={<Navigate to={"/home"} />} />
          <Route element={<HomeLayout />}>
            <Route path="/home" element={<PostList />} />
            <Route path="/post/:postId" element={<PostDetails />} />
            <Route path="/post/create" element={<CreatePostForm />} />
          </Route>
        </>
      ) : (
        <>
          <Route element={<LandingLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}
    </Routes>
  );
}
