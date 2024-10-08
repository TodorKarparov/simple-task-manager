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
import { createUser, UserRecord } from "../../services/user-service";
import AuthService from "../../services/auth-service";

class RegistrationFormViewModel {
  email: string = "";
  password: string = "";
  name: string = "";

  setName(name: string) {
    this.name = name;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  async registerUser() {
    const user = {
      email: this.email,
      password: this.password,
      passwordConfirm: this.password,
      name: this.name,
    } as UserRecord;

    try {
      console.log("Creating user:", user);
      await createUser(user);
      await AuthService.login({
        identity: user.email,
        password: user.password,
      }).then((response) => {
        console.log(response?.token);
      });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  }
}

const RegistrationFormView = () => {
  const viewModel = new RegistrationFormViewModel();

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
              Welcome to the Simple Task Manager
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
                viewModel.registerUser();
              }}
            />
            <GithubSignupButton />
          </Flex>
        </Flex>
      </Container>
    </FormControl>
  );
};

export default RegistrationFormView;
