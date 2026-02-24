import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextValue = {
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return <AuthContext value={contextValue}>{children}</AuthContext>;
}
