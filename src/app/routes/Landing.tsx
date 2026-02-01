import { Flex, Grid, Heading, Mark } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function Landing() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"vh"}>
      <Grid templateColumns={"1fr 1fr"} gap={"10"} maxWidth={"4xl"}>
        <Heading size={"5xl"} lineHeight={"tall"} placeSelf={"center"}>
          Keep up with everything on the{" "}
          <Mark
            variant={"subtle"}
            padding={"2"}
            borderBottomColor={"green.500"}
            borderBottomWidth={"medium"}
            borderBottomStyle={"solid"}
            color={"green.500"}>
            Front
          </Mark>{" "}
          of the world
        </Heading>
        <Outlet />
      </Grid>
    </Flex>
  );
}
