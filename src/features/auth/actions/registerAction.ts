import { ValidationError } from "../../../types/user";

const registerAction = async (
  _prevState: string[],
  formData: FormData
): Promise<string[]> => {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  // check if any of fields is empty
  if (
    email.length === 0 ||
    username.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0
  ) {
    return ["Please fill all of the form fields"];
  }

  if (password !== confirmPassword) {
    return ["Passwords aren't the same"];
  }

  const requestOptions: RequestInit = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  };

  const response = await fetch(
    "http://localhost:3000/user/sign-in",
    requestOptions
  );

  if (response.status === 409) {
    const { message } = await response.json();
    return message;
  }

  if (response.status === 400) {
    const { errors }: { errors: ValidationError[] } = await response.json();
    const formErrors = errors.map((errors) => errors.msg);
    return formErrors;
  }

  if (response.status === 200) {
    return ["Account registered successfully"];
  }

  return ["Something went wrong. Please try again later"];
};

export default registerAction;
