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
    cleanDistPath: true,
    target: "web",
    // Remove the static/js subdirectory structure
    distPath: {
      js: "", // Output JS files directly in dist/
      css: "",
      svg: "",
      font: "",
      image: "",
    },
    filename: {
      js: "[name].js",
    },
    // Key library settings
    format: "esm",
    externals: [
      "svelte",
      "svelte/*",
      "@lucide/svelte",
      "clsx", 
      "tailwind-merge",
      "tailwind-variants",
      "tw-animate-css"
    ],
  },
  plugins: [pluginSvelte()],
  // Disable HTML output for libraries
  html: false,
});