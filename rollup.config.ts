import { defineConfig } from "rollup"
import esbuild from "rollup-plugin-esbuild"

export default defineConfig({
  input: "sources/index.tsx",
  external: [
    "preact/jsx-runtime",
    "preact-render-to-string"
  ],
  plugins: [
    esbuild({
      jsx: "automatic",
      jsxImportSource: "preact"
    })
  ],
  output: {
    file: "build/index.js",
    format: "esm"
  }
})
