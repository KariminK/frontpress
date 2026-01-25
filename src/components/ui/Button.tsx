type props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: props) => {
  return (
    <button
      className={
        "px-4 py-3 text-white rounded-md cursor-pointer bg-linear-180 from-green-500/75 to-green-600/75 disabled:from-green-300 disabled:to-green-400 disabled:cursor-not-allowed " +
        className
      }>
      {children}
    </button>
  );
};
export default Button;
