import { useActionState } from "react";
import { FormErrorList, Input, SubmitBtn } from "../../components/ui";
import { registerAction } from "./actions";

const RegisterForm = () => {
  const [formResult, action] = useActionState(registerAction, []);

  return (
    <form action={action}>
      <Input label="email" id="email_input" name="email" type="email" />
      <Input label="username" id="login_input" name="username" type="text" />
      <Input
        label="password"
        id="password_input"
        name="password"
        type="password"
      />
      <Input
        label="confirm password"
        id="confirm_password_input"
        name="confirmPassword"
        type="password"
      />
      <SubmitBtn value="Register" />
      <FormErrorList errors={formResult} />
    </form>
  );
};
export default RegisterForm;
