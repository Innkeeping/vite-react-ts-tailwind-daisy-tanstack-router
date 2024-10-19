import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'


export default defineConfig({
  base: '/vite-react-ts-tailwind-daisy-tanstack-router',
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
})