import Pinia from 'pinia'
import type { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.use(Pinia.createPinia())
  },
  Pinia,
}
