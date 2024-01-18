import { useState } from "react";
import If from "../lib/ReactUsefulBlock/If";

function IfExample() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div>
      <h1>If Example</h1>

      <If condition={value !== null}>
        <If.Then>
          {() => {
            return (
              <>
                <p>value is Not Null</p>
                <p>value:{value!.toString()}</p>
                <button onClick={() => setValue(value! + 1)}>increment</button>
                <br />
                <button onClick={() => setValue(null)}>set Null</button>
              </>
            );
          }}
        </If.Then>
        <If.Else>
          <p>value is Null</p>

          <button onClick={() => setValue(0)}>
            <span>Click Me</span>
          </button>
        </If.Else>
      </If>
    </div>
  );
}

export default IfExample;
