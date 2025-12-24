import type { UserConfig } from 'vite';

import path from 'node:path';

async function getCommonConfig(): Promise<UserConfig> {
  return {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: false,
    },
  };
}

export { getCommonConfig };
