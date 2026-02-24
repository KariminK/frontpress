import { Button, Field, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useActionState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useAuth } from "@/features/auth";

export default function LoginForm() {
  const [message, action] = useActionState<string, FormData>(loginAction, "");
  const auth = useAuth();
  const navigate = useNavigate();

  async function loginAction(_prevState: string, formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || email.length === 0 || !password || password.length === 0) {
      return "Email and password cannot be empty";
    }

    const requestBody = { email, password };

    try {
      const response = await fetch("http://localhost:3000/user/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok && response.status === 200) {
        auth?.setToken(data.token);
        return navigate("/home", { replace: true });
      }

      return data.message;
    } catch (error) {
      console.log(error);
      return "Unknown error occured";
    }
  }

  return (
    <form action={action}>
      <Flex direction="column" gap="5">
        <Field.Root>
          <Field.Label fontWeight="bold">Email</Field.Label>
          <Input variant="subtle" type="email" name="email" />
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight="bold">Password</Field.Label>
          <Input type="password" name="password" variant="subtle" />
        </Field.Root>
        <Button mt="3" type="submit">
          Login
        </Button>
        <Text color={"fg.error"} h={"4"}>
          {message}
        </Text>
        <Text>
          Are you new?{" "}
          <Link as="span">
            <RouterLink to="/register">Create your account now!</RouterLink>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}
