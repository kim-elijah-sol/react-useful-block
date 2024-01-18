import { IfChildComponentProps } from "./type";

function Then({ children }: IfChildComponentProps) {
  if (typeof children === "function") {
    return <>{children()}</>;
  }

  return <>{children}</>;
}

export default Then;
