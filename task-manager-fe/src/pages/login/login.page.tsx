import { Grid } from "@chakra-ui/react";
import SigninFormView from "../../views/login-form/login-form.v";
import LoginFormViewModel from "../../view-models/login-form.vm";
import { useNavigate } from "react-router-dom";
import userModel from "../../models/user.model";

const SigninPage = () => {
  const viewModel = new LoginFormViewModel(useNavigate(), userModel);
  return (
    <Grid
      minHeight="100vh"
      placeItems="center" // Shortcut for aligning and justifying content at the center
    >
      <SigninFormView viewModel={viewModel} />
    </Grid>
  );
}

export default SigninPage;
