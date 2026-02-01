import { Route, Routes } from "react-router";
import { Landing } from "./routes";
import { LoginForm, RegisterForm } from "@/features/auth";

export default function Router() {
  return (
    <Routes>
      <Route element={<Landing />}>
        <Route index element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}
