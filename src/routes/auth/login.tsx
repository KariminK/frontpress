import { Link } from "react-router";
import { Footer, Navbar } from "../../components/modules";
import { LoginForm } from "../../features/auth";

const Login = () => {
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
        <Link to={"/register"} className="text-green-500">
          Create one
        </Link>{" "}
        for free
      </p>
      <Footer />
    </>
  );
};

export default Login;
