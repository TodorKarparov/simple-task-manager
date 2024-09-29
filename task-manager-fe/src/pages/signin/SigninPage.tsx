import { Grid } from "@chakra-ui/react";
import SigninFormView from "../../views/SigninForm/SigninForm";

function SigninPage() {
  return (
    <Grid
      minHeight="100vh"
      placeItems="center" // Shortcut for aligning and justifying content at the center
    >
      <SigninFormView />
    </Grid>
  );
}

export default SigninPage;