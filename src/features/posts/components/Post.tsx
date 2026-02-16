import { Box, Button, Card, Image } from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";

export default function Post() {
  return (
    <Card.Root flexDirection={"row"}>
      <Image
        maxW={"sm"}
        src="https://img-cdn.hltv.org/gallerypicture/OVgE82lubpbhYVo4Y_6zcx.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=1091&mx=202&my=4850&q=75&w=8192&s=bc535f65287a538d4248e1c048b8d2d5"
      />
      <Box>
        <Card.Body gap={2}>
          <Card.Title>
            IEM Krakow is over! See overview of the tournament
          </Card.Title>
          <Card.Description lineHeight={"tall"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            totam consequuntur, itaque distinctio fuga doloribus aliquid culpa
            non hic aliquam. Eveniet illo facilis quibusdam, animi aliquam
            maxime! Commodi numquam ea itaque quos corpori...
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button variant={"outline"}>
            Read more <BiArrowToRight></BiArrowToRight>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}
