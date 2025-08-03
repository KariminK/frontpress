import { LogInResBody, SuccessLogInResBody } from "../../../types/user";

const login = async (
  _prevState: string[],
  formData: FormData
): Promise<string[] | SuccessLogInResBody> => {
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

  if (response.status !== 401 && response.status !== 200) {
    newFormErrors.push("Something went wrong, Try again later");
    return newFormErrors;
  }

  const userData: LogInResBody = await response.json();

  if (userData.status !== null) {
    newFormErrors.push(userData.message);
    return newFormErrors;
  }

  return userData;
};

export default login;
