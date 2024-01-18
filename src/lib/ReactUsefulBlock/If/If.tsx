import { Children, cloneElement, isValidElement } from "react";
import Then from "./Then";
import Else from "./Else";
import { IfChildComponent, IfProps } from "./type";

function If({ condition, children }: IfProps) {
  const renderableComponent = (
    Children.toArray(children)
      .filter(isValidElement)
      .filter((child) => {
        if (child.type === Then) {
          return condition;
        }

        return condition === false && child.type === Else;
      }) as IfChildComponent[]
  ).map((child) => {
    return cloneElement(child);
  });

  console.log(children);

  return <>{renderableComponent}</>;
}

export default If;
