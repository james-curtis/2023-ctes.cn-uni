import type { App } from 'vue'
import tmui from '#tmui/index'

export default {
  install(app: App<Element>) {
    app.use(tmui, { shareDisable: false })
  },
}
