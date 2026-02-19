import { List } from "@chakra-ui/react";
import Comment from "./Comment";

export default function CommentList() {
  return (
    <List.Root>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </List.Root>
  );
}
