import { defineConfig } from 'vite';
import shared from '../../vite.shared.js';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const rootDir = path.resolve(__dirname);
  return {
    root: rootDir,
    base: '',
    publicDir: path.resolve(rootDir, 'public'),
    build: { outDir: path.resolve(rootDir, 'dist') },
    server: { port: 5175 },
    ...shared({ rootDir, command, mode }),
  };
});
