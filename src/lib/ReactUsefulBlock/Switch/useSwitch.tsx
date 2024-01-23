import { useMemo } from "react";
import Switch from "./Switch";
import { SwitchProps } from "./type";
import Case from "./Case";
import Default from "./Default";

/**
 * 기존 Switch, Case 만 사용했을 때,
 * Switch value 타입을 Case value 타입으로 제한할 수 없었음.
 * 이를 hook 으로 묶어서 해결
 */
function useSwitch<T>(value: T) {
  const SwitchComponent = useMemo(
    () =>
      Object.assign(
        function Component<T>(props: SwitchProps<T>) {
          return <Switch {...props} />;
        },
        {
          Case: Case as (props: SwitchProps<T>) => JSX.Element,
          Default,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  return [SwitchComponent];
}

export default useSwitch;
