import { Center, Spinner, Text } from "@chakra-ui/react";

export default function Pending() {
  return (
    <Center gap={"3"} fontSize={"2xl"}>
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Processing...</Text>
    </Center>
  );
}
