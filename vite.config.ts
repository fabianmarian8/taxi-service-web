import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['5173-i35kr4wka3bh7zrpmkmdg-bab57eda.manusvm.computer', '.manusvm.computer']
  },
  // Set base to './' for relative paths (works with any deployment path)
  // Or set to '/repo-name/' if deploying to github.io/repo-name
base: '/' ,
    resolve: {
          alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
