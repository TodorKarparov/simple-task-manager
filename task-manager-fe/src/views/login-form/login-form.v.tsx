import {
  Box,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { GithubSignupButton } from "../../components/buttons/github-signup-button";
import { LoginButton } from "../../components/buttons/signin-button";
import { observer } from "mobx-react-lite";
import LoginFormViewModel from "../../view-models/login-form.vm";
import React from "react";


interface SigninFormViewProps {
  viewModel: LoginFormViewModel;
}

const LoginFormView: React.FC<SigninFormViewProps> = (props: SigninFormViewProps) => {

  return (
    <FormControl
      bg="white"
      width={566}
      height={600}
      padding={4}
      color="black"
      borderRadius={20}
      paddingTop="36px"
      paddingLeft="48px"
      paddingRight="48px"
      paddingBottom="36px"
      isRequired={true}
      isInvalid={!props.viewModel.isEmailValid}
    >
      <Container padding="0px 0">
        <Flex direction="column" align="center" height="100%" gap="2rem">
          <Flex direction="column" align="center" width="100%">
            <div className="plane-svg"></div>
            <Heading size="md" color="#142333">
              Welcome to Simple Task Manager
            </Heading>
          </Flex>
          <Flex direction="column" width="100%" gap="16px">
            <Box width="100%">
              <FormLabel color="#8797A8">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="e.g. yourname@mail.com"
                borderRadius="10px"
                isInvalid={!props.viewModel.isEmailValid}
                onChange={(e) => {
                  props.viewModel.setEmail(e.target.value);
                }}
              />
              {!props.viewModel.isEmailValid && (
                <FormErrorMessage>Please enter a valid email address!</FormErrorMessage>
              )}
            </Box>
            <Box width="100%">
              <FormLabel color="#8797A8">Password</FormLabel>
              <Input
                id="password"
                type="password"
                borderRadius="10px"
                onChange={(e) => props.viewModel.setPassword(e.target.value)}
                isInvalid={false}
              />
            </Box>
          </Flex>
          <Flex justify="center" direction="column" gap={5} width="100%">
            <LoginButton
              onClick={() => {
                props.viewModel.loginUser();
              }}
            />
            <GithubSignupButton />
          </Flex>
        </Flex>
      </Container>
    </FormControl>
  );
};

export default observer(LoginFormView);
