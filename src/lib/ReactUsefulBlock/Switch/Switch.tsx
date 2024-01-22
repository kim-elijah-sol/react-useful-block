import { Children, ReactElement, isValidElement, useMemo } from "react";
import { CaseProps, SwitchProps } from "./type";

function Switch<T>({ children, value }: SwitchProps<T>) {
  const renderableComponet = useMemo(() => {
    return Children.toArray(children)
      .filter(isValidElement)
      .find((child) => {
        return (child as ReactElement<CaseProps<T>>).props.value === value;
      });
  }, [children, value]);

  return <>{renderableComponet}</>;
}

export default Switch;
