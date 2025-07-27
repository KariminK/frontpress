import { useState } from "react";
import { Input } from "../../components/ui";
import { FormErrorList } from "../../components/ui";

const LoginForm = () => {
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const login = (formData: FormData) => {
    const login = formData.get("login");
    const password = formData.get("password");

    if (login === "" || password === "") {
      const newFormErrors = [...formErrors];
      newFormErrors.push("Login or password cannot be empty");
      setFormErrors(newFormErrors);
    }
  };

  return (
    <form action={login}>
      <Input label="Login" id="login_input" name="login" />
      <Input label="password" id="password_input" name="password" />
      <input
        type="submit"
        value="Log in"
        className="px-4 my-5 py-3 w-full text-white rounded-md cursor-pointer bg-linear-180 from-green-500/75 to-green-600/75"
      />
      <FormErrorList errors={formErrors} />
    </form>
  );
};
export default LoginForm;
