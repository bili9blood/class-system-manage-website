import { Signal } from "solid-js";

interface Props {
  name: string;
  placeholder?: string;
  type: "text" | "password" | "email" | "number";

  valueRef: Signal<string>;
}

let inputEl: HTMLInputElement;
export default function (props: Props) {
  const [val, setVal] = props.valueRef;

  const inputHandler = (e: InputEvent) => {
    setVal((e.target as HTMLInputElement).value);
  };

  return (
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{props.name}</span>
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder ?? `请输入${props.name}`}
        class="input input-bordered w-full max-w-xs"
        ref={inputEl}
        onInput={inputHandler}
        value={val()}
      />
    </label>
  );
}
