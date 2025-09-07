import { useFormStatus } from "react-dom";

const FormPending = () => {
  const { pending } = useFormStatus();
  if (pending) return <h1>Pending...</h1>;
};

export default FormPending;
