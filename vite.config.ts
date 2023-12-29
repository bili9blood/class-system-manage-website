import { defineConfig } from "vite";
import pages from "vite-plugin-pages";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid(), pages()],
});
