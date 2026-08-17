import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/static/",
  plugins: [
    react(),
  ],
  server: {
    host: true,
    cors: true,
  },
  build: {
    outDir: "static",
    manifest: "manifest.json",
    rollupOptions: {
      input: {
        "src/main.tsx": "src/main.tsx",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
