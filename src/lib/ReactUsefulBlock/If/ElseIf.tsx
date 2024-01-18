import { ElseIfComponentProps } from "./type";

function ElseIf({ children }: ElseIfComponentProps) {
  if (typeof children === "function") {
    return <>{children()}</>;
  }

  return <>{children}</>;
}

export default ElseIf;
