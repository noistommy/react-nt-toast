import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { LibraryFormats } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const __dirname = resolve()

const commonConfig = {
  plugins: [react()],
}

const libConfig = {
  ...commonConfig,
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'nt-toast',
      fileName: (format: LibraryFormats) => `nt-toast.${format}.js`,
      formats: ['es', 'cjs', 'umd'] as LibraryFormats[],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          'react-dom': 'ReactDOM',
        },
        // Use `index.css` for css
        assetFileNames: (assetInfo: {name?: string}) => {
          if (assetInfo.name !== "toast.css") return "nt-toast.css"
          return assetInfo.name
        }
      }
    }
  }
}

const demoConfig = defineConfig({
  ...commonConfig,
  root: "./demo",
  base: process.env.NODE_ENV === 'production' ? '/react-nt-toast/' : '/',
  server: {
    port: 5904
  }
})

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || "lib";

  const mode = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return { ...demoConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
