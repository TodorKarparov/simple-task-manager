import { Button } from "./base/button";

interface SigninButtonProps {
  onClick?: () => void;
}

export function SigninButton(props: SigninButtonProps) {
  return <Button text="Sign in" onClick={props.onClick} />;
}
