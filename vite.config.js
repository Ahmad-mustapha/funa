import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'; // Use 'node:path' for ESM compatibility
import { fileURLToPath } from 'url'; // ESM way to get file paths

// Resolve the current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@lib': path.resolve(__dirname, 'src/lib'), // Maps '@lib' to 'src/lib'
    },
  },
})
