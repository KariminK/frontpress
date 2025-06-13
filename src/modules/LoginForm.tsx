import FormInput from "../components/Form";

const LoginForm = () => {
  return (
    <form action="">
      <FormInput label="Login" id="login_input" name="login" />
      <FormInput label="password" id="login_input" name="login" />
      <div className="flex justify-center">
        <input
          type="submit"
          value="Log in"
          className="px-4 py-2 text-white rounded-md cursor-pointer bg-linear-180 from-green-400/75 to-green-600/75"
        />
      </div>
    </form>
  );
};
export default LoginForm;
