import { defineConfig } from "vite";
import shared from "../../vite.shared.js";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig(({ command, mode }) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.resolve(__dirname);
  return {
    root: rootDir,
    base: "",
    publicDir: path.resolve(rootDir, "public"),
    build: { outDir: path.resolve(rootDir, "dist") },
    server: { port: 5179 },
    ...shared({ rootDir, command, mode }),
  };
});
