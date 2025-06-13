interface TextInputProps {
  label: string;
  name: string;
  id: string;
}

const TextInput = ({ label, id, name }: TextInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} />
    </div>
  );
};
export default TextInput;
