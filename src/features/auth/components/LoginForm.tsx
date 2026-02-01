import { Button, Field, Flex, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export default function LoginForm() {
  return (
    <form>
      <Flex direction={"column"} gap={"5"}>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Login</Field.Label>
          <Input variant={"subtle"} />
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Password</Field.Label>
          <Input type="password" variant={"subtle"} />
        </Field.Root>
        <Button mt={"3"}>Login</Button>
        <Text>
          Are you new?{" "}
          <Link>
            <RouterLink to={"/register"}>Create your account now!</RouterLink>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}
