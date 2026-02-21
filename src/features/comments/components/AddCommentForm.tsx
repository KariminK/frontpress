import { Avatar, Button, Flex, Textarea } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

// TODO: REPLACE AVATAR WITH USER AVATAR

// TODO: MAKE TEXTAREA RESIZE AS COMMENT'S CONTENT EXPANDS

export default function AddCommentForm() {
  return (
    <Flex
      as={"form"}
      gap={5}
      paddingInline={0}
      mt={5}
      p={5}
      alignItems={"center"}>
      <Avatar.Root>
        <Avatar.Fallback name={"User Name"} />
        <Avatar.Image src={"link"} />
      </Avatar.Root>
      <Textarea
        rows={1}
        height={"fit-content"}
        p={5}
        placeholder="Share your thoughts..."
        fontSize={"xl"}
        resize={"vertical"}
        variant={"flushed"}></Textarea>
      <Button variant={"surface"}>
        Send <BiSend />
      </Button>
    </Flex>
  );
}
