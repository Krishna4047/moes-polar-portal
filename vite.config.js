import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true, // Listen on 0.0.0.0 so phone can connect over Wi-Fi
    port: 3000,
    open: false,
    allowedHosts: true // Allow all hosts (localtunnel, ngrok, cloudflare, mobile IPs)
  }
})
