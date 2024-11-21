import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@stores": path.resolve(__dirname, "src/stores"),
    },
  },
});
