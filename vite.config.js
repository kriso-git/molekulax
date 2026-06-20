import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { inlineCss } from './vite-plugin-inline-css.js'

export default defineConfig({
  // Restrict the dev dep-scan to the app entry so Vite does not try to crawl the
  // offline render tools in scripts/*.html (which import three / webm-muxer from
  // a CDN importmap, not from node_modules).
  optimizeDeps: { entries: ['index.html'] },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png', 'icon-maskable.png'],
      workbox: {
        // PNG fallbacks (5-7MB per effects-tile) are intentionally excluded
        // from precache — they're only fetched by browsers without AVIF/WebP
        // support, which the runtime CacheFirst strategy handles fine.
        // Entry body JS chunks live in assets/entry-data/ and are excluded
        // from precache — the user only loads one language at a time, so
        // precaching all 3 lang × 163 entries (~3 MB) is wasteful. They're
        // served via runtime CacheFirst (immutable hash-versioned URLs).
        globPatterns: ['**/*.{js,css,html,svg,webp,avif,woff2,ico}'],
        globIgnores: ['**/assets/entry-data/**'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\/assets\/entry-data\/.*\.js$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'entry-data',
              expiration: { maxEntries: 600, maxAgeSeconds: 365 * 24 * 60 * 60 },
            },
          },
          {
            urlPattern: /\.(?:png|webp|avif|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
          {
            // pre-rendered card-motif loops — CacheFirst so returning users don't
            // re-download the ~2 MB per library on every visit. Not precached
            // (would block the SW install); status 0 covers media range requests.
            urlPattern: /\/card-viz\/.*\.webm$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'card-viz',
              expiration: { maxEntries: 40, maxAgeSeconds: 30 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // pre-rendered rotating 3D chemical-structure loops + posters (the
            // nootropic entry/gallery visuals). CacheFirst, NOT precached (37
            // entries × ~0.9 MB would bloat the SW install). status 0 covers the
            // media range requests for the webm.
            urlPattern: /\/mol-viz\/.*\.(?:webm|jpg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'mol-viz',
              expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.woff2$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 },
            },
          },
        ],
      },
      manifest: {
        name: 'MolekulaX — Farmakológiai edukáció',
        short_name: 'MolekulaX',
        description: 'Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek tudományos alapon',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
        start_url: '/',
        lang: 'hu',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
    inlineCss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId || ''
          const normalised = facadeModuleId.replace(/\\/g, '/')
          if (/\/src\/data\/libraries\/[^/]+\/entries\/(hu|en|pl)\//.test(normalised)) {
            return 'assets/entry-data/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
      },
    },
  },
})
