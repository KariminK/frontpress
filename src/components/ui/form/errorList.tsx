import FormError from "./error";

type errorListProps = {
  errors: string[];
};

const FormErrorList = ({ errors }: errorListProps) => {
  if (errors.length > 0) {
    const erorrElements = errors.map((error) => {
      return <FormError>{error}</FormError>;
    });

    return <ul>{...erorrElements}</ul>;
  }

  return <></>;
};

export default FormErrorList;
