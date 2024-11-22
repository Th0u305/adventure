import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react'; // Create a React-specific chunk
            }
            if (id.includes('flyonui')) {
              return 'vendor-flyonui'; // Create a FlyonUI-specific chunk
            }
            return 'vendor'; // General vendor chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Increase the limit if needed
  },
})
