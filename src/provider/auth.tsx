import { ReactNode, useState } from "react";
import { AuthContext, AuthLoginContext } from "../context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken_(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken_(null);
  };

  return (
    <AuthContext value={token}>
      <AuthLoginContext value={{ login, logout }}>{children}</AuthLoginContext>
    </AuthContext>
  );
};

export { AuthProvider };
