import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { LibraryFormats } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = resolve()

const commonConfig = {
  plugins: [react()],
}

const libConfig = {
  ...commonConfig,
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'nt-toast',
      fileName: (format: any) => `nt-toast.${format}.js`,
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
        assetFileNames: (assetInfo: any) => {
          if (assetInfo.name !== "toast.css") return "toast.css"
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
    port: 5190
  }
})

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  console.log(command)
  const executionMode = process.env.MODE || "lib";

  const mode = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return { ...demoConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
