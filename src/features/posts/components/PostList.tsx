import { Container } from "@chakra-ui/react";
import Post from "./Post";

// TODO: add multiple posts rendering logic here
export default function PostList() {
  return (
    <Container mt={5}>
      <Post></Post>
    </Container>
  );
}
