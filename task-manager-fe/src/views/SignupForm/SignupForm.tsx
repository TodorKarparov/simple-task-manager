import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { GithubSignupButton } from "../../components/buttons/github-signup-button";
import { SignupButton } from "../../components/buttons/signup-button";
import "./signup-form-styles.scss";
import { SignupFormViewModel } from "../../view-models/SignupFormViewModel";

const SignupFormView = () => {
  const viewModel = new SignupFormViewModel();

  return (
    <FormControl
      bg="white"
      width={566}
      height={751}
      padding={4}
      color="black"
      borderRadius={20}
      paddingTop="36px"
      paddingLeft="48px"
      paddingRight="48px"
      paddingBottom="36px"
    >
      <Container padding="0px 0">
        <Flex direction="column" align="center" height="100%" gap="2rem">
          <Flex direction="column" align="center" width="100%">
            <div className="plane-svg"></div>
            <Heading size="md" color="#142333">
              Welcome to Infinity Tasks
            </Heading>
          </Flex>
          <Flex direction="column" width="100%" gap="16px">
          <Box width="100%">
              <FormLabel color="#8797A8">Name</FormLabel>
              <Input
                type="text"
                borderRadius="10px"
                onChange={(e) => viewModel.setName(e.target.value)}
              />
            </Box>
            <Box width="100%">
              <FormLabel color="#8797A8">Email address</FormLabel>
              <Input
                type="email"
                placeholder="e.g. yourname@mail.com"
                borderRadius="10px"
                onChange={(e) => {
                  viewModel.setEmail(e.target.value);
                }}
              />
            </Box>
            <Box width="100%">
              <FormLabel color="#8797A8">Password</FormLabel>
              <Input
                type="password"
                borderRadius="10px"
                onChange={(e) => viewModel.setPassword(e.target.value)}
              />
            </Box>
          </Flex>
          <Flex justify="center" direction="column" gap={5} width="100%">
            <SignupButton
              onClick={() => {
                viewModel.createUser();
              }}
            />
            <GithubSignupButton />
          </Flex>
        </Flex>
      </Container>
    </FormControl>
  );
};
export default SignupFormView;