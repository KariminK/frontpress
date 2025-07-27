import { Footer, Navbar } from "../../components/modules";
import { RegisterForm } from "../../features/auth";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2">
        <h1 className="my-20 text-5xl text-left leading-20 self-center">
          Welcome to <br />
          <b className="font-roboto-slab">
            Front<span className="text-green-500">press</span>
          </b>
        </h1>
        <div>
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
