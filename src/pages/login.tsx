import { createSignal } from "solid-js";
import PeopleSvg from "../assets/people.svg";
import TextInput from "../components/TextInput";

const [username, setUsername] = createSignal("");
const [password, setPassword] = createSignal("");

function LoginForm() {
  return (
    <div class="flex flex-col gap-2 items-center justify-items-center w-[60%]">
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
    <div class="min-h-[20rem] h-[50vh] w-[50vw] flex items-center">
      <img
        src={PeopleSvg}
        alt="people"
        class="w-[40%] h-full p-5 bg-sky-200 rounded-l-lg pointer-events-none select-none"
      />
      <LoginForm />
    </div>
  );
}
