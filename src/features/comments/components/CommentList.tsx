import { List } from "@chakra-ui/react";
import Comment from "./Comment";

// TODO: Add rendering comments from array logic

export default function CommentList() {
  return (
    <List.Root mt={10} gap={5} listStyleType={"none"}>
      <Comment
        username="Juan Pablo Dos"
        created_at={new Date()}
        content="expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team"
        likes={6}
        dislikes={7}
      />
      <Comment
        username="Juan Pablo Dos"
        created_at={new Date()}
        content="expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team"
        likes={6}
        dislikes={7}
      />
      <Comment
        username="Juan Pablo Dos"
        created_at={new Date()}
        content="expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team"
        likes={6}
        dislikes={7}
      />
      <Comment
        username="Juan Pablo Dos"
        created_at={new Date()}
        content="expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team"
        likes={6}
        dislikes={7}
      />
    </List.Root>
  );
}
