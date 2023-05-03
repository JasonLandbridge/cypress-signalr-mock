import { defineConfig } from "vitest/config";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "cypress-signalr-mock",
    },
  },
  plugins: [dts()],
  test: {
    environment: "happy-dom",
    include: ["tests/*.test.ts"],
    unstubGlobals: true,
  },
});
