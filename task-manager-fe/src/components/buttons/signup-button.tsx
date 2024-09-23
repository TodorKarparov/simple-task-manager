import { Button } from "./base/button";

interface SignupButtonProps {
    onClick?: () => void;
}

export function SignupButton(props: SignupButtonProps) {
    return (
      <Button text="Sign up" onClick={props.onClick}/>
    );
  }
