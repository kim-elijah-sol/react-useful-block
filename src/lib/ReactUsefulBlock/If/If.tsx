import { Children, ReactElement, isValidElement, useMemo } from "react";
import Then from "./Then";
import { ElseIfComponentProps, IfProps } from "./type";
import ElseIf from "./ElseIf";

function If({ condition, children }: IfProps) {
  const isThenRender = condition;

  const isElseIfRender = useMemo(() => {
    if (isThenRender) {
      return false;
    }

    return Children.toArray(children)
      .filter(isValidElement)
      .some((child) => {
        if (child.type === ElseIf) {
          return (
            (child as ReactElement<ElseIfComponentProps>).props.condition ===
            true
          );
        }

        return false;
      });
  }, [isThenRender, children]);

  const isElseRender = useMemo(() => {
    return !isThenRender && !isElseIfRender;
  }, [isThenRender, isElseIfRender]);

  const renderableComponent = useMemo(() => {
    return Children.toArray(children)
      .filter(isValidElement)
      .find((child) => {
        if (child.type === Then) {
          return isThenRender;
        }
        if (child.type === ElseIf) {
          return (
            isElseIfRender &&
            (child as ReactElement<ElseIfComponentProps>).props.condition ===
              true
          );
        }

        return isElseRender;
      });
  }, [isThenRender, isElseIfRender, isElseRender, children]);

  return <>{renderableComponent}</>;
}

export default If;
