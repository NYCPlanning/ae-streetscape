import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      outDir: "dist",
      exclude: ["src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
      insertTypesEntry: true,
      // that inlines imports to a single bundled .d.ts
      rollupTypes: true,
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
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@chakra-ui/icons",
        "@chakra-ui/layout",
        "@chakra-ui/media-query",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
      ],
    },
  },
});
