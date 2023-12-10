import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import type { App } from 'vue'

export default {
  install(app: App<Element>) {
    const store = Pinia.createPinia()
    store.use(createUnistorage())
    app.use(store)
  },
  Pinia,
}
