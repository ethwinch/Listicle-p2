import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: { // when trying to access /locations endpoint from the client, we tell the server to access this route at http://localhost:3001 while we're in development
      '/locations': {
        target: 'http://localhost:3001'
      }
    }
  }
})