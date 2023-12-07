<template>
  <tm-app>
    <slot />
    <tm-tabbar v-model:active="active" @change="onChange">
      <tm-tabbar-item
        text="首页"
        active-color="#3C9CFF"
        :icon="icon.home"
        @click="active = 0"
      />
      <tm-tabbar-item
        text="资讯"
        active-color="#3C9CFF"
        :icon="icon.news"
        @click="active = 1"
      />
      <tm-tabbar-item
        text="我的"
        active-color="#3C9CFF"
        :icon="icon.account"
        @click="active = 2"
      />
    </tm-tabbar>
  </tm-app>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmTabbar from '@/tmui/components/tm-tabbar/tm-tabbar.vue'
import tmTabbarItem from '@/tmui/components/tm-tabbar-item/tm-tabbar-item.vue'
import { icons } from '@/config/icons'

const pages = {
  0: `/pages/index/index`,
}
const active = ref(0)

const icon = reactive(icons)

const emit = defineEmits(['change'])

function onChange(idx: number) {
  emit('change', idx)
}
</script>
