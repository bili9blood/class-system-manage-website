import { A } from "@solidjs/router";

export default function () {
  return (
    <div class="py-4 gap-4 flex flex-col items-center">
      <p class="font-bold text-8xl mx-16">404</p>
      <A class="btn" href="/login">
        主页
      </A>
    </div>
  );
}
