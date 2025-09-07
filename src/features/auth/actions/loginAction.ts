import { LogInResBody, SuccessLogInResBody } from "../../../types/user";

const loginAction = async (
  _prevState: string[] | SuccessLogInResBody,
  formData: FormData
): Promise<string[] | SuccessLogInResBody> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (email === "" || password === "") {
    return ["login or password cannot be empty"];
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
    return ["Something went wrong, Try again later"];
  }

  const userData: LogInResBody = await response.json();

  if (userData.message !== "Authorized Correctly!") {
    return [userData.message];
  }

  return userData;
};

export default loginAction;
