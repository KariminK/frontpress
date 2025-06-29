import FormInput from "../components/Form";

const SignInForm = () => {
  return (
    <form action="">
      <FormInput label="email" id="email_input" name="login" />
      <FormInput label="login" id="login_input" name="login" />
      <FormInput
        label="confirm password"
        id="confirm_password_input"
        name="confirmPassword"
      />
      <FormInput label="password" id="password_input" name="password" />
      <input
        type="submit"
        value="Sign in"
        className="px-4 my-5 py-3 w-full text-white rounded-md cursor-pointer bg-linear-180 from-green-500/75 to-green-600/75"
      />
    </form>
  );
};
export default SignInForm;
