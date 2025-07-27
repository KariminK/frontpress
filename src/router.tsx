import { Route, Routes } from "react-router";
import Dashboard from "./routes/dashboard";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
