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
import { SigninButton } from "../../components/buttons/signin-button";
import userStore from "../../stores/user.store";
import { useNavigate, NavigateFunction } from "react-router-dom";
import authService from "../../services/auth-service";
import { AuthResponse } from "../../dto/response/auth-response.dto";

class LoginFormViewModel {
  private email: string = "";
  private password: string = "";
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  async loginUser() {
    try {
      await authService
        .login({
          identity: this.email,
          password: this.password,
        })
        .then(() => {
          console.log("User logged in successfully:", userStore.getName);
          this.navigate("/");
        });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  }
}

const SigninFormView = () => {
  const viewModel = new LoginFormViewModel(useNavigate());

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
            <SigninButton
              onClick={() => {
                viewModel.loginUser();
              }}
            />
            <GithubSignupButton />
          </Flex>
        </Flex>
      </Container>
    </FormControl>
  );
};
export default SigninFormView;
