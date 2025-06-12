const Navbar = () => {
  return (
    <nav className="sticky z-10 flex justify-between px-5 py-3 mb-10 border shadow-lg border-gray-200/50 bg-white/50 rounded-2xl top-5 backdrop-blur-lg">
      <ul className="flex items-center gap-5">
        <li className="mr-3 text-lg font-semibold font-roboto-slab">
          Front<span className="text-green-600">press</span>
        </li>
      </ul>
      <ul className="flex items-center gap-5">
        <li className="">
          <a href="./sign-in">Sign in</a>
        </li>
        <li className="px-4 py-2 rounded-md bg-linear-180 from-green-400/75 to-green-600/75">
          <a href="./login" className="text-white">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
