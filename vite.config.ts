import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [solid(), pages()],
});
