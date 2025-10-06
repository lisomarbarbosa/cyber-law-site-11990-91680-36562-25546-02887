import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Configurações do servidor
  server: {
    host: mode === "development" ? "::" : "127.0.0.1", // Aberto a todas as interfaces em dev, restrito a localhost em produção
    port: 8080,
  },
  // Plugins
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  // Resolução de aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configurações específicas para produção (opcionais)
  build: mode === "production" ? { sourcemap: false, minify: "terser" } : {},
}));