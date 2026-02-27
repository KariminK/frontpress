import { Button, Field, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useActionState } from "react";
import { Navigate, Link as RouterLink } from "react-router";
import Pending from "./Pending";

interface RegisterFormFieldErrors {
  email?: string;
  login?: string;
  password?: string;
  confirmPassword?: string;
  form?: string;
}

export default function RegisterForm() {
  const [fieldErrors, action, isPending] = useActionState<
    RegisterFormFieldErrors | true,
    FormData
  >(registerAction, {});

  async function registerAction(
    _prevState: RegisterFormFieldErrors | true,
    formData: FormData,
  ) {
    const fieldErrors: RegisterFormFieldErrors = {};

    const email = formData.get("email")!.toString();
    const login = formData.get("login")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();

    const inputValues = { email, login, password, confirmPassword };

    Object.entries(inputValues).forEach(([input, value]) => {
      if (value.length === 0)
        fieldErrors[input as keyof RegisterFormFieldErrors] =
          "This can't be empty";
    });

    if (password !== confirmPassword) {
      fieldErrors.password = "passwords have to be identical";
      fieldErrors.confirmPassword = "passwords have to be identical";
    }

    try {
      const reqBody = { email, password, username: login };

      const response = await fetch("http://localhost:3000/user/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();

      if (response.ok && response.status === 200) {
        console.log(data);
        return true;
      } else {
        fieldErrors.form = data.message;
      }
    } catch (_error: unknown) {
      const error = _error as Error;
      fieldErrors.form = error.message;
    }

    return fieldErrors;
  }

  if (isPending) {
    return <Pending />;
  }

  if (fieldErrors === true) {
    return <Navigate to={"/"} />;
  }
  return (
    <form action={action}>
      <Flex direction="column" gap="5">
        <Field.Root invalid={fieldErrors.email !== undefined}>
          <Field.Label fontWeight="bold">Email</Field.Label>
          <Input variant="subtle" type="email" name="email" />
          <Field.ErrorText>{fieldErrors.email}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={fieldErrors.login !== undefined}>
          <Field.Label fontWeight="bold">Login</Field.Label>
          <Input variant="subtle" type="text" name="login" />
          <Field.ErrorText>{fieldErrors.login}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={fieldErrors.password !== undefined}>
          <Field.Label fontWeight="bold">Password</Field.Label>
          <Input type="password" variant="subtle" name="password" />
          <Field.ErrorText>{fieldErrors.password}</Field.ErrorText>
          <Field.HelperText>
            Your password must be at least 8 characters long and contain at
            least one uppercase letter, lowercase letter, number, and special
            character
          </Field.HelperText>
        </Field.Root>
        <Field.Root invalid={fieldErrors.confirmPassword !== undefined}>
          <Field.Label fontWeight="bold">Confirm password</Field.Label>
          <Input type="password" variant="subtle" name="confirmPassword" />
          <Field.ErrorText>{fieldErrors.confirmPassword}</Field.ErrorText>
        </Field.Root>
        <Button mt="3" type="submit">
          Register
        </Button>
        {fieldErrors.form && (
          <Text color={"fg.error"} h={"4"}>
            {fieldErrors.form}
          </Text>
        )}
        <Text>
          Already have an account?{" "}
          <Link as="span">
            <RouterLink to="/">Go back to login</RouterLink>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}
