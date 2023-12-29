import { createSignal } from "solid-js";
import PeopleSvg from "../assets/people.svg";
import TextInput from "../components/TextInput";

const [username, setUsername] = createSignal("");
const [password, setPassword] = createSignal("");

function LoginForm() {
  return (
    <div class="flex w-[60%] flex-col items-center justify-items-center gap-2">
      <p class="text-2xl">登录</p>
      <br />
      <TextInput name="用户名" type="text" valueRef={[username, setUsername]} />
      <TextInput
        name="密码"
        type="password"
        valueRef={[password, setPassword]}
      />
    </div>
  );
}

export default function () {
  return (
    <div class="flex h-[50vh] min-h-[20rem] w-[50vw] items-center">
      <img
        src={PeopleSvg}
        alt="people"
        class="pointer-events-none h-full w-[40%] select-none rounded-l-lg bg-sky-200 p-5"
      />
      <LoginForm />
    </div>
  );
}
