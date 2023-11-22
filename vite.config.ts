import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UniManifest(), UniPages({ dts: './types/uni-pages.d.ts' }), uni()],
})
