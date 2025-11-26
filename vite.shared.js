import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({

  root: process.env.VITE_APP_ROOT || process.cwd(),

  server: {
    port: 5555,
  },

  plugins: [react()],

  build: {
    outDir: path.resolve(process.cwd(), process.env.VITE_APP_ROOT, 'dist'),
  },

});