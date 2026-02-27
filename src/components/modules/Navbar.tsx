import { useAuth } from "@/features/auth";
import { Button, Flex, Heading, IconButton, Mark } from "@chakra-ui/react";
import { BiLogOut, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.setToken("");
    navigate("/", { replace: true });
  };

  return (
    <nav>
      <Flex
        gap={"5"}
        alignItems="center"
        justifyContent="flex-end"
        px="5"
        py="3"
        rounded="md"
        position="sticky"
        backdropBlur={"lg"}
        top="10">
        <Heading mr={"auto"}>
          <Mark variant={"subtle"} color={"green.500"} py={"1"}>
            Front
          </Mark>
          Press
        </Heading>
        <Button variant={"surface"}>
          Create new post
          <BiPlus></BiPlus>
        </Button>
        <IconButton
          onClick={handleLogout}
          variant={"surface"}
          colorPalette={"red"}>
          <BiLogOut></BiLogOut>
        </IconButton>
      </Flex>
    </nav>
  );
}
