import {
  Avatar,
  Button,
  HStack,
  IconButton,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BiDislike, BiFlag, BiLike } from "react-icons/bi";

// TODO: Extract comment interface into another file

interface Comment {
  username: string;
  image_src?: string;
  created_at: Date;
  content: string;
  likes: number;
  dislikes: number;
}

export default function Comment({
  username,
  image_src,
  created_at,
  content,
  likes,
  dislikes,
}: Comment) {
  return (
    <ListItem padding={5}>
      <HStack gap={4}>
        <Avatar.Root>
          <Avatar.Fallback name={username} />
          <Avatar.Image src={image_src} />
        </Avatar.Root>
        <Text fontSize={"sm"}>{username}</Text>
        <Text fontSize={"sm"} ml={"auto"} color={"GrayText"}>
          {created_at.toDateString()}
        </Text>
      </HStack>
      <Text my={5}>{content}</Text>
      <HStack gap={2}>
        <Button variant={"surface"}>
          {likes}
          <BiLike />
        </Button>
        <Button colorPalette={"red"} variant={"surface"}>
          {dislikes}
          <BiDislike />
        </Button>
        <IconButton colorPalette={"orange"} variant={"surface"} ml={"auto"}>
          <BiFlag />
        </IconButton>
      </HStack>
    </ListItem>
  );
}
