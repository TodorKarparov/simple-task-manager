import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  text: string;
  border?: string | number;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <ChakraButton
      colorScheme="blue"
      bg="var(--cta-color, #4592E5)"
      borderRadius="10px"
      border={props.border || "0px"}
      _hover={{
        background: "var(--cta-color, #4592E5)",
        boxShadow: "0px 0px 7px 0px #4572E5",
      }}
      _active={{
        background: "#397ABF",
      }}
      _focus={{
        outline: "0px",
      }}
      onClick={props.onClick}
    >
      {props.text}
    </ChakraButton>
  );
}
