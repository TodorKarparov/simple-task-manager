import { Button } from "./base/button";

interface LoginButtonProps {
  onClick?: () => void;
}

export function LoginButton(props: LoginButtonProps) {
  return <Button text="Sign in" onClick={props.onClick} />;
}
