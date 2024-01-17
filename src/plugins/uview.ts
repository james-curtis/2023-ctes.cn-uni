import uView from 'vk-uview-ui'
import type { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.use(uView)
  },
}
