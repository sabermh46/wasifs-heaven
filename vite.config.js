import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0B0B0C',
        background: '#111827',
        card: '#1F2937',
        primary: '#1D4ED8',
        'primary-hover': '#2563EB',
        text: '#F8F9FA',
        subtext: '#9CA3AF',
        success: '#10B981',
        error: '#EF4444',
      }
    },
  },
  
})
