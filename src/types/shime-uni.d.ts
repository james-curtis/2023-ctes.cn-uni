/// <reference types='@dcloudio/types' />
import 'vue'

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance

  interface ComponentCustomOptions extends Hooks {}

  interface GlobalComponents {
    view: HTMLElement
    image: HTMLElement
    text: HTMLElement
  }
}
