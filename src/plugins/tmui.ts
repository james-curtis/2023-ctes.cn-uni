import tmui from '@cataract6545/tmui'
import type { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.use(tmui, { shareDisable: false })
  },
}
