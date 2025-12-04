import react from "@vitejs/plugin-react";
import path from "path";

export default function shared({ rootDir, command, mode }) {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "src"),
      },
    },
  };
}
