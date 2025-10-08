import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

export default defineConfig({
  mode: "production",
  source: {
    entry: {
      index: "./src/index.ts",
    },
  },
  output: {
    target: "web",
  },
  tools: {
    rspack(config, { appendPlugins }) {
      appendPlugins([pluginSvelte()]);

      config.resolve = {
        ...config.resolve,
      };
    },
  },
  resolve: {
    extensions: [".svelte", ".ts", ".js", ".svelte.js", ".svelte.ts"],
  },
});
