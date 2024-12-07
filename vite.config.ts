import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://googlereviewsolicitor.azurewebsites.net",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
