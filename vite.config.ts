import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ocr-system/",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
  },
});
