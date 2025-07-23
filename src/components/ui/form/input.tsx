interface InputProps {
  label: string;
  name: string;
  id: string;
}

const Input = ({ label, id, name }: InputProps) => {
  return (
    <div className="my-10">
      <label className="capitalize" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        type="text"
        name={name}
        id={id}
        className="w-full p-2 mt-2 text-lg border border-gray-200 rounded-lg focus:outline-0 focus:shadow-lg"
      />
    </div>
  );
};
export default Input;
