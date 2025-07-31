import { useActionState } from "react";
import { Input } from "../../components/ui";
import { FormErrorList } from "../../components/ui";
import login from "./actions/loginAction";

const LoginForm = () => {
  const [formErrors, loginAction] = useActionState<string[], FormData>(
    login,
    []
  );

  return (
    <form action={loginAction}>
      <Input label="Email" id="email_input" name="email" type="email" />
      <Input
        label="password"
        id="password_input"
        name="password"
        type="password"
      />
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
