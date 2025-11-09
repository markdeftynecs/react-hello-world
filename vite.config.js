import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process'
import fs from 'node:fs'

// --- Resolve app version from package.json ---
const pkgPath = new URL('./package.json', import.meta.url)
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
const APP_VERSION = pkg.version || process.env.npm_package_version || '0.0.0'

// --- Resolve current Git commit hash (short) ---
let GIT_HASH = 'dev'
try {
  GIT_HASH = execSync('git rev-parse --short HEAD').toString().trim()
} catch {
  // Happens in environments without .git (e.g., shallow CI clone)
  GIT_HASH = 'ci'
}

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
    __GIT_HASH__: JSON.stringify(GIT_HASH)
  },
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: true
  }
})
