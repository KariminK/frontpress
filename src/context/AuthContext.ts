import { createContext } from "react";

type AuthLoginFn = (newToken: string) => void;
type AuthLogoutFn = () => void;

export const AuthContext = createContext<string | null>(null);
export const AuthLoginContext = createContext<{
  login: AuthLoginFn;
  logout: AuthLogoutFn;
} | null>(null);
