/* @refresh reload */
import { render } from "solid-js/web";

import "./main.css";
import { Router, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";

const rootEl = document.getElementById("root")!;
const bgImgEl = document.getElementById("background-image") as HTMLImageElement;

render(() => Router({ children: useRoutes(routes)() }), rootEl);

// Fetch Bing's daily bakcground image
fetch("https://bing.biturl.top/")
  .then((res) => res.json())
  .then((json: { url: string }) => {
    bgImgEl.src = json.url;
  });
