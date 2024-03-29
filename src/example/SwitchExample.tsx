import { useState } from "react";
import Switch, { Case, Default } from "../lib/ReactUsefulBlock/Switch";

function SwitchExample() {
  const [value, setValue] = useState<number>(1);

  function handleClick() {
    if (value === 1) {
      setValue(2);
    } else if (value === 2) {
      setValue(3);
    } else {
      setValue(1);
    }
  }

  return (
    <div>
      <h1>Switch Example</h1>

      <button onClick={handleClick}>setValue</button>

      <Switch value={value}>
        <Case value={1}>
          <p>value is one</p>
        </Case>
        <Case value={2}>
          <p>value is two</p>
        </Case>
        <Default>
          <p>value is other value</p>
        </Default>
      </Switch>
    </div>
  );
}

export default SwitchExample;
