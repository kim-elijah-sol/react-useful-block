import { CaseProps } from "./type";

function Case<T>({ children }: CaseProps<T>) {
  if (typeof children === "function") {
    return <>{children()}</>;
  }

  return <>{children}</>;
}

export default Case;
