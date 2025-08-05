import { LogInResBody, SuccessLogInResBody } from "../../../types/user";

const loginAction = async (
  _prevState: string[] | SuccessLogInResBody,
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
      email,
      password,
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

  if (userData.message !== "Authorized Correctly!") {
    newFormErrors.push(userData.message);
    return newFormErrors;
  }

  return userData;
};

export default loginAction;
