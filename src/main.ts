import { createSSRApp } from 'vue'
import App from './App.vue'
import store from '@/stores'
import tmui from '@/plugins/tmui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(tmui)
  return {
    app,
    Pinia: store.Pinia,
  }
}
