import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://kuis1-pbp.hansyulian.space",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});