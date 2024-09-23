import { Grid } from "@chakra-ui/react";
import SignupFormView from "../../views/SignupForm/SignupForm";
import "./signup-page-styles.scss";

function SignupPage() {
  return (
    <Grid
      minHeight="100vh"
      placeItems="center" // Shortcut for aligning and justifying content at the center
    >
      <SignupFormView />
    </Grid>
  );
}

export default SignupPage;
