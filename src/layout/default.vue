<template>
  <tm-app>
    <slot />
    <tm-tabbar v-model:active="active">
      <tm-tabbar-item
        text="首页"
        active-color="#3C9CFF"
        :icon="tabbarIcon.home"
        @click="active = 0"
      />
      <tm-tabbar-item text="资讯" @click="active = 1" />
      <tm-tabbar-item text="我的" @click="active = 2" />
    </tm-tabbar>
  </tm-app>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmTabbar from '@/tmui/components/tm-tabbar/tm-tabbar.vue'
import tmTabbarItem from '@/tmui/components/tm-tabbar-item/tm-tabbar-item.vue'
import { useSvgDataUrl } from '@/utils/icon/svg'

const active = ref(0)

const tabbarIcon = reactive({ home: useSvgDataUrl('home.svg') })

console.log(`tabbarIcon`, tabbarIcon)
</script>
