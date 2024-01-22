import { Children, ReactElement, isValidElement, useMemo } from "react";
import { CaseProps, SwitchProps } from "./type";
import Case from "./Case";

function Switch<T>({ children, value }: SwitchProps<T>) {
  const isCaseRender = useMemo(() => {
    return Children.toArray(children)
      .filter(isValidElement)
      .some((child) => {
        return (child as ReactElement<CaseProps<T>>).props.value === value;
      });
  }, [children, value]);

  const renderableComponet = useMemo(() => {
    return Children.toArray(children)
      .filter(isValidElement)
      .find((child) => {
        if (child.type === Case) {
          return (
            isCaseRender &&
            (child as ReactElement<CaseProps<T>>).props.value === value
          );
        }

        return !isCaseRender;
      });
  }, [children, isCaseRender, value]);

  return <>{renderableComponet}</>;
}

export default Switch;
