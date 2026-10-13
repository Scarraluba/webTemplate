
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React Template',
        short_name: 'Template',
        start_url: '/',
        display: 'standalone',
        theme_color: '#111827',
        background_color: '#111827'
      }
    })
  ]
})
