import { Button, Field, Flex, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export default function RegisterForm() {
  return (
    <form>
      <Flex direction={"column"} gap={"5"}>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Email</Field.Label>
          <Input variant={"subtle"} />
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Login</Field.Label>
          <Input variant={"subtle"} />
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Password</Field.Label>
          <Input type="password" variant={"subtle"} />
          <Field.HelperText>
            Your password must be at least 8 characters long and contain at
            least one uppercase letter, lowercase letter, number, and special
            character
          </Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Field.Label fontWeight={"bold"}>Confirm password</Field.Label>
          <Input type="password" variant={"subtle"} />
        </Field.Root>
        <Button mt={"3"}>Register</Button>
        <Text>
          Already have an account?{" "}
          <Link>
            <RouterLink to={"/"}>Go back to login</RouterLink>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}
