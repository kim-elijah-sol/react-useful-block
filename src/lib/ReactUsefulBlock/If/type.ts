import { ReactElement } from "react";

export type IfChildComponentProps = {
  children: React.ReactNode | (() => JSX.Element);
};

export type IfChildComponent = ReactElement<IfChildComponentProps>;

export type IfProps = {
  condition: boolean;
  children: IfChildComponent | IfChildComponent[];
};
