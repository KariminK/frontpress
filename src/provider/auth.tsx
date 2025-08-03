import { ReactNode, useState } from "react";
import { AuthContext, AuthLoginContext } from "../context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const login = (newToken: string) => {
    setToken_(newToken);
  };

  return (
    <AuthContext value={token}>
      <AuthLoginContext value={login}>{children}</AuthLoginContext>
    </AuthContext>
  );
};

export { AuthProvider };
