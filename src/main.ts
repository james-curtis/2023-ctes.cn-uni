import { createSSRApp } from 'vue'
import App from './App.vue'
import store from '@/plugins/store'
import tmui from '@/plugins/tmui'
import uview from '@/plugins/uview'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(tmui)
  app.use(uview)
  return {
    app,
    Pinia: store.Pinia,
  }
}
