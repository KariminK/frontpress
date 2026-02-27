import { Container, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export default function Footer() {
  return (
    <Container as={"footer"} mt="10" pb={10}>
      <Text textAlign={"center"}>
        Made by{" "}
        <RouterLink to={"https://karimink.github.io/"}>
          <Link as={"span"} variant={"underline"} fontWeight={"bold"}>
            Karimin
          </Link>
        </RouterLink>
      </Text>
    </Container>
  );
}
