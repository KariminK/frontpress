import { Input } from "../../components/ui";

const RegisterForm = () => {
  return (
    <form action="">
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
      <input
        type="submit"
        value="Sign in"
        className="px-4 my-5 py-3 w-full text-white rounded-md cursor-pointer bg-linear-180 from-green-500/75 to-green-600/75"
      />
    </form>
  );
};
export default RegisterForm;
