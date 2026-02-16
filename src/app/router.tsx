import { Route, Routes } from "react-router";
import { Landing, Home } from "./routes";
import { LoginForm, RegisterForm } from "@/features/auth";
import { PostList } from "@/features/posts";

export default function Router() {
  return (
    <Routes>
      <Route element={<Landing />}>
        <Route index element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
      <Route path="/home" element={<Home />}>
        <Route index element={<PostList />} />
      </Route>
    </Routes>
  );
}
