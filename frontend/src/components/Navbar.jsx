import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus, CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient="linear(to-r, cyan.400, blue.400)"
          bgClip="text"
          fontWeight="bold"
          textAlign={"center"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <CiSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
