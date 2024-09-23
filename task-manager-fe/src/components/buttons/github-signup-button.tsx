import { Button as ChakraButton, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function GithubSignupButton() {
  return (
    <ChakraButton
      leftIcon={<Icon as={FaGithub} boxSize={6} />}
      backgroundColor="#FFF"
      color="black"
      fontSize="md"
      fontWeight="bold"
      variant="outline"
      borderRadius="10px"
      border={"1px solid #000"}
      px="4"
      py="2"
      _hover={{
        border: "1px solid #000",
        boxShadow: "0px 0px 7px 0px #31313166",
      }}
      _active={{
        borderRadius: "10px",
        border: "1px solid #000",
        background: "#E6E6E6",
      }}
      _focus={{
        outline: "0px",
      }}
    >
      Sign up with GitHub
    </ChakraButton>
  );
}
