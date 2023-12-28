/* @refresh reload */
import { render } from "solid-js/web";

import "./main.css";
import { Router, useRoutes } from "@solidjs/router";
import routes from "~solid-pages";

const rootEl = document.getElementById("root")!;
const bgImgEl = document.getElementById("background-image") as HTMLImageElement;

render(() => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <Routes />
    </Router>
  );
}, rootEl);

// Use Bing's daily image
bgImgEl.src = `https://api.dujin.org/bing/1920.php?${Date.now()}`;
