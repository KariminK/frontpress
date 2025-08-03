import { createContext } from "react";

type AuthLoginFn = (newToken: string) => void;

export const AuthContext = createContext<string | null>(null);
export const AuthLoginContext = createContext<AuthLoginFn | null>(null);
