import { DefaultProps } from "./type";

function Default({ children }: DefaultProps) {
  if (typeof children === "function") {
    return <>{children()}</>;
  }

  return <>{children}</>;
}

export default Default;
