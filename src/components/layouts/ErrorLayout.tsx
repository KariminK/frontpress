import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export default function ErrorLayout({ status }: { status: number }) {
  return (
    <Flex
      justifyContent={"center"}
      h={"dvh"}
      alignItems={"center"}
      flexDirection={"column"}>
      <Heading
        fontSize={"9xl"}
        fontWeight={"light"}
        height={"0.75em"}
        color={"green.500"}>
        {status}
      </Heading>
      <Text>Not Found</Text>
      <Button variant={"surface"} mt={"5"}>
        <Link to={"/"}>Back to home page</Link>
      </Button>
    </Flex>
  );
}
