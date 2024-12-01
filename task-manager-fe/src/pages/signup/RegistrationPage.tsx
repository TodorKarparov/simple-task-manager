import { Grid } from "@chakra-ui/react";
import RegistrationFormView from "../../views/SignupForm/RegistrationForm";
import "./signup-page-styles.scss";

function RegistrationPage() {
  return (
    <Grid
      minHeight="100vh"
      placeItems="center" // Shortcut for aligning and justifying content at the center
    >
      <RegistrationFormView />
    </Grid>
  );
}

export default RegistrationPage;
