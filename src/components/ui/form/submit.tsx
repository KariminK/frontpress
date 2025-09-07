import { useFormStatus } from "react-dom";

type submitBtnProps = {
  value: string;
};

const SubmitBtn = ({ value }: submitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <input
      type="submit"
      value={pending ? "Processing..." : value}
      disabled={pending}
      className="px-4 my-5 py-3 w-full text-white rounded-md cursor-pointer bg-linear-180 from-green-500/75 to-green-600/75 disabled:from-green-300 disabled:to-green-400 disabled:cursor-not-allowed"
    />
  );
};

export default SubmitBtn;
