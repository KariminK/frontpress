import { Footer, LoginForm, Navbar } from "../modules";

const LoginLayout = () => {
  return (
    <>
      <Navbar />
      <h1 className="my-10 text-3xl text-center">Welcome Back!</h1>
      <div className="max-w-lg p-5 mx-auto border border-gray-100 shadow-xl rounded-xl">
        <LoginForm />
      </div>
      <p className="mt-5 text-center">
        You don't have an account?{" "}
        <a href="" className="text-green-500">
          Create one
        </a>{" "}
        for free
      </p>
      <Footer />
    </>
  );
};

export default LoginLayout;
