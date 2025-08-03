import { useContext } from "react";
import { AuthContext, AuthLoginContext } from "../context";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useLogin = () => {
  return useContext(AuthLoginContext);
};
