import { useEffect, useState } from "react";
import If from "../lib/ReactUsefulBlock/If";

function IfExample() {
  const [value, setValue] = useState<number | string | null>(null);

  useEffect(() => {
    if (typeof value === "number" && value >= 10) {
      setValue("ten");
    }
  }, [value]);

  return (
    <div>
      <h1>If Example</h1>

      <If condition={typeof value === "number"}>
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
                <button onClick={() => setValue((value as number)! + 1)}>
                  increment
                </button>
                <br />
                <button onClick={() => setValue(null)}>set Null</button>
              </>
            );
          }}
        </If.Then>
        <If.ElseIf condition={typeof value === "string"}>
          <p>value is String</p>

          <button onClick={() => setValue(null)}>
            <span>set Null</span>
          </button>
        </If.ElseIf>
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
