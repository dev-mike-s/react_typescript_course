import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ rootDir } = {}) => {
  const srcDir = rootDir ? path.resolve(rootDir, 'src') : path.resolve(process.cwd(), 'src');
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': srcDir,
      },
    },
    css: { devSourcemap: true },
  };
};
