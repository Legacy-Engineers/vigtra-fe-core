import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

export default defineConfig({
  mode: "production",
  source: {
    entry: {
      index: "./src/index.ts", // your package entry
    },
  },
  output: {
    cleanDistPath: true,
    target: "web",
  },
  plugins: [pluginSvelte()],
});
