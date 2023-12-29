/* @refresh reload */
import { render } from "solid-js/web";

import { Toaster } from "solid-toast";

import { Router, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";
import "./main.css";

const rootEl = document.getElementById("root")!;
const bgImgEl = document.getElementById("background-image") as HTMLImageElement;

render(() => {
  const Routes = useRoutes(routes);
  return (
    <>
      <Toaster position="top-center" />
      <div class="absolute left-[50%] top-[50%] z-20 h-screen w-screen translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-lg md:h-auto md:w-auto">
        <Router>
          <Routes />
        </Router>
      </div>
    </>
  );
}, rootEl);

// Use Bing's daily image
bgImgEl.src = `https://api.dujin.org/bing/1920.php?${new Date().getDay()}`;
