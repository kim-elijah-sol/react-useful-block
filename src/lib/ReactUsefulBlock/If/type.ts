import { ReactElement } from "react";

export type IfChildComponentProps = {
  children: React.ReactNode | (() => JSX.Element);
};

export type ElseIfComponentProps = {
  condition: boolean;
} & IfChildComponentProps;

export type IfChildComponent =
  | ReactElement<IfChildComponentProps>
  | ReactElement<ElseIfComponentProps>;

export type IfProps = {
  condition: boolean;
  children: IfChildComponent | IfChildComponent[];
};
