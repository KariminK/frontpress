import { Footer, Navbar, SignInForm } from "../modules";

const SignInLayout = () => {
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
          <SignInForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInLayout;
