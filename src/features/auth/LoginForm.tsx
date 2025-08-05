import { useActionState, useEffect } from "react";
import { Input } from "../../components/ui";
import { FormErrorList } from "../../components/ui";
import loginAction from "./actions/loginAction";
import { SuccessLogInResBody } from "../../types/user";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks";
import { useFormStatus } from "react-dom";

type actionState = SuccessLogInResBody | string[];

const isSuccessResponse = (data: actionState): data is SuccessLogInResBody => {
  return !Array.isArray(data);
};

const LoginForm = () => {
  const [formResult, formAction] = useActionState<actionState, FormData>(
    loginAction,
    []
  );
  const { pending } = useFormStatus();
  const navigator = useNavigate();
  const login = useLogin();

  useEffect(() => {
    if (isSuccessResponse(formResult) && login !== null) {
      login(formResult.token);
      navigator("/");
    }
  }, [formResult]);

  // TODO: fix pending state
  if (pending) return <h1>Processing...</h1>;

  return (
    <form action={formAction}>
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
      <FormErrorList errors={Array.isArray(formResult) ? formResult : []} />
    </form>
  );
};
export default LoginForm;
