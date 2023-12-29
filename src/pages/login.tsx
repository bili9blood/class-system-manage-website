import { createSignal } from "solid-js";
import PeopleSvg from "../assets/people.svg";
import TextInput from "../components/TextInput";

const [username, setUsername] = createSignal("");
const [password, setPassword] = createSignal("");

function LoginForm() {
  return (
    <div class="flex h-full py-14 w-full flex-col items-center justify-items-center gap-2 md:w-[60%]">
      <p class="text-2xl">管理后台登录</p>
      <br />
      <TextInput name="用户名" type="text" valueRef={[username, setUsername]} />
      <TextInput
        name="密码"
        type="password"
        valueRef={[password, setPassword]}
      />
      <br />
      <button class="btn btn-wide">登录</button>
    </div>
  );
}

export default function () {
  return (
    <div class="m-auto flex items-center overflow-hidden md:h-[50vh] md:min-h-[20rem] md:w-[50vw] md:min-w-[35rem]">
      <img
        src={PeopleSvg}
        alt="people"
        class="pointer-events-none hidden h-full w-[40%] select-none rounded-l-lg bg-sky-200 p-5 md:block"
      />
      <LoginForm />
    </div>
  );
}
