import { useEffect, useState } from "react";

const useToken: () => string | null = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    setToken(tokenFromStorage);
  }, []);
  return token;
};

export default useToken;
