import { ReactElement, ReactNode } from "react";

export type CaseProps<T> = {
  children: ReactNode | (() => JSX.Element);
  value: T;
};

export type DefaultProps = {
  children: ReactNode | (() => JSX.Element);
};

export type SwitchChildComponent<T> =
  | ReactElement<CaseProps<T>>
  | ReactElement<DefaultProps>;

export type SwitchProps<T> = {
  children: SwitchChildComponent<T> | SwitchChildComponent<T>[];
  value: T;
};
