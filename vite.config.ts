import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  define: {
    "import.meta.env.VITE_API_V2_BASE_URL": "import.meta.env.VITE_API_V2_BASE_URL",
  },
  plugins: [
    react(),
    dts({ include: ["src"], tsconfigPath: "./tsconfig.app.json", rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.names?.[0]?.endsWith(".css") ? "style.css" : (assetInfo.names?.[0] ?? "asset"),
      },
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@tanstack/react-query",
        "axios",
        "dayjs",
        "lucide-react",
      ],
    },
  },
});
