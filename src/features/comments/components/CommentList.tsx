import { For, List } from "@chakra-ui/react";
import Comment from "./Comment";

export default function CommentList() {
  const comments = [
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
    {
      username: "Juan Pablo Dos",
      created_at: new Date(),
      content:
        "expected, stop overreacting. Honeymoon over, but furia still a decent team. What worries me is fallen wanted to retire and if he does im not sure what happens to this team",
      likes: 6,
      dislikes: 7,
    },
  ];
  return (
    <List.Root mt={10} gap={5} listStyleType={"none"}>
      <For each={comments}>
        {({ username, created_at, content, likes, dislikes }) => (
          <Comment
            username={username}
            created_at={created_at}
            content={content}
            likes={likes}
            dislikes={dislikes}
          />
        )}
      </For>
    </List.Root>
  );
}
