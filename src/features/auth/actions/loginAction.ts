import { LogInResBody } from "../../../types/user";

const login = async (
  _prevState: string[],
  formData: FormData
): Promise<string[]> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const newFormErrors: string[] = [];

  if (email === "" || password === "") {
    newFormErrors.push("Login or password cannot be empty");
    return newFormErrors;
  }

  const requestOptions: RequestInit = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "xkarimink@gmail.com",
      password: "Xyz!1425232",
    }),
  };

  const response = await fetch(
    "http://localhost:3000/user/log-in",
    requestOptions
  );

  const data: LogInResBody = await response.json();

  if (response.status === 200 && response.ok) {
    localStorage.setItem("token", data.token);
  }
  return newFormErrors;
};

export default login;
