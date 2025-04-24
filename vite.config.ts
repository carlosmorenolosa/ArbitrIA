import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // alias limpio para src/
    },
  },
  build: {
    outDir: "dist", // directorio de salida estándar
    emptyOutDir: true,
  },
});
