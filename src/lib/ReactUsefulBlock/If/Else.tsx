import { IfChildComponentProps } from "./type";

function Else({ children }: IfChildComponentProps) {
  if (typeof children === "function") {
    return <>{children()}</>;
  }

  return <>{children}</>;
}

export default Else;
