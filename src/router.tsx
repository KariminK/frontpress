import { Route, Routes } from "react-router";
import Dashboard from "./routes/dashboard";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import { AuthProvider } from "./provider/auth";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
};

export default Router;
