import { A } from "@solidjs/router";

export default function () {
  return (
    <div class="flex flex-col items-center gap-4 py-4">
      <p class="mx-16 text-8xl font-bold">404</p>
      <A class="btn" href="/">
        主页
      </A>
    </div>
  );
}
