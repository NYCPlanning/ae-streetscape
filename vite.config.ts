import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
      insertTypesEntry: true,
    }),
    externalizeDeps(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
});
