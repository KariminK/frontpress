// TODO: ADD POST FETCH LOGIC

import { CommentList } from "@/features/comments";
import { Badge, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiComment, BiFlag } from "react-icons/bi";

export default function PostDetails() {
  return (
    <>
      <Heading mt={10} fontSize={"4xl"} lineHeight={"tall"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
        officiis.
      </Heading>
      <Flex my={3} justifyContent={"space-between"}>
        <Badge variant={"plain"}>Juan pablo dos</Badge>
        <Badge variant={"plain"} color={"GrayText"}>
          {new Date().toDateString()}
        </Badge>
      </Flex>
      <Text lineHeight={"taller"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        nostrum corporis adipisci officia id. Ipsum sunt obcaecati numquam
        veritatis aliquid, fugit doloribus modi, ut vitae debitis aperiam alias
        libero amet delectus beatae soluta veniam minima assumenda fuga
        voluptatum facilis quisquam! Veritatis fugiat quo nesciunt, non minima
        nam at eaque nulla. Recusandae officia tempore quasi, ex quas
        perspiciatis fugiat excepturi, rem corrupti ea doloremque voluptates
        voluptatum voluptate accusamus dolores laborum vitae atque, eligendi
        officiis deleniti blanditiis fugit magni. Soluta eum a illo esse aliquam
        reiciendis id exercitationem blanditiis aspernatur ex. Voluptate quam,
        itaque corrupti molestias odio sequi magnam beatae voluptatem atque?
      </Text>
      <Button mt={5} variant={"surface"}>
        Show comments
        <BiComment />
      </Button>
      <Button mt={5} ml={2} variant={"surface"} colorPalette={"red"}>
        Report
        <BiFlag />
      </Button>
      <CommentList />
    </>
  );
}
