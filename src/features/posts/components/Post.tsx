import { Badge, Flex, Text, Box, Button, Card, Image } from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";

// TODO: EXTRACT POST TYPE TO OTHER FILE
interface Post {
  id: number;
  created_at: Date;
  published_at: Date;
  title: string;
  content: string;
  authorName: string;
}

export default function Post({
  published_at,
  title,
  content,
  authorName,
}: Post) {
  return (
    <Card.Root flexDirection={"row"}>
      <Image
        maxW={"sm"}
        src="https://img-cdn.hltv.org/gallerypicture/OVgE82lubpbhYVo4Y_6zcx.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=1091&mx=202&my=4850&q=75&w=8192&s=bc535f65287a538d4248e1c048b8d2d5"
      />
      <Box>
        <Card.Body gap={2}>
          <Flex justifyContent={"space-between"}>
            <Badge variant={"subtle"}>{authorName}</Badge>
            <Text fontSize={"xs"} color={"GrayText"}>
              {published_at.toDateString()}
            </Text>
          </Flex>
          <Card.Title>{title}</Card.Title>
          <Card.Description lineHeight={"tall"}>{content}</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button variant={"subtle"}>
            Read more <BiArrowToRight></BiArrowToRight>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
