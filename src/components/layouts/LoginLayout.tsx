import { Footer, Navbar } from "../modules";
import { LoginForm } from "../../features/auth";

const LoginLayout = () => {
  return (
    <>
      <Navbar />
      <h1 className="my-20 text-5xl text-center">
        Welcome to{" "}
        <b className="font-roboto-slab">
          Front<span className="text-green-500">press</span>
        </b>
      </h1>
      <div className="max-w-xl mx-auto">
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
