import { useState } from "react";
import If from "../lib/ReactUsefulBlock/If";

function IfExample() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div>
      <h1>If Example</h1>

      <If condition={value !== null}>
        <If.Then>
          {/**
           * @description
           * 바로 value 를 타입 단언하여 사용하면 에러가 발생하여,
           * children 을 함수로 받아서 사용
           */}
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
