import { useState } from "react";
import useSwitch from "../lib/ReactUsefulBlock/Switch/useSwitch";

function UseSwitchExample() {
  const [value, setValue] = useState<number | null>(1);

  function handleClick() {
    if (value === 1) {
      setValue(2);
    } else if (value === 2) {
      setValue(null);
    } else {
      setValue(1);
    }
  }

  const [Switch] = useSwitch(value);

  return (
    <div>
      <h1>UseSwitch Example</h1>

      <button onClick={handleClick}>setValue</button>

      <Switch value={value}>
        <Switch.Case value={1}>
          <p>value is one</p>
        </Switch.Case>
        <Switch.Case value={2}>
          <p>value is two</p>
        </Switch.Case>
        <Switch.Default>
          <p>value is null</p>
        </Switch.Default>
      </Switch>
    </div>
  );
}

export default UseSwitchExample;
