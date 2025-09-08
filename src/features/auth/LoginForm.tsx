import { useActionState, useEffect } from "react";
import { Input, SubmitBtn } from "../../components/ui";
import { FormErrorList } from "../../components/ui";
import { loginAction } from "./actions/";
import { SuccessLogInResBody } from "../../types/user";
import { useNavigate } from "react-router";
import { useLogin } from "../../hooks";

type actionState = SuccessLogInResBody | string[];

const isSuccessResponse = (data: actionState): data is SuccessLogInResBody => {
  return !Array.isArray(data);
};

const LoginForm = () => {
  const [formResult, formAction] = useActionState<actionState, FormData>(
    loginAction,
    []
  );
  const navigator = useNavigate();
  const user = useLogin();

  useEffect(() => {
    if (isSuccessResponse(formResult) && user !== null) {
      user.login(formResult.token);
      navigator("/");
    }
  }, [formResult]);

  return (
    <form action={formAction}>
      <Input label="Email" id="email_input" name="email" type="email" />
      <Input
        label="password"
        id="password_input"
        name="password"
        type="password"
      />
      <FormErrorList errors={Array.isArray(formResult) ? formResult : []} />
      <SubmitBtn value="Login" />
    </form>
  );
};
export default LoginForm;
