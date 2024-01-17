<template>
  <tm-app
    :bg-style="`padding-bottom: var(--app-bottom)`"
    :navbar-dark-auto="false"
    color="white"
  >
    <slot />
    <tm-tabbar v-model:active="active" @change="onChange">
      <tm-tabbar-item
        text="首页"
        active-color="#3C9CFF"
        :icon="icons.home"
        @click="active = 0"
      />
      <tm-tabbar-item
        text="资讯"
        active-color="#3C9CFF"
        :icon="icons.news"
        @click="active = 1"
      />
      <tm-tabbar-item
        text="我的"
        active-color="#3C9CFF"
        :icon="icons.account"
        @click="active = 2"
      />
    </tm-tabbar>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { icons } from '@/config/icons'

const pages: Record<number, string> = {
  0: `/pages/portal/index`,
  1: `/pages/index/news`,
  2: `/pages/user/home`,
}
const active = ref(-1)

const emit = defineEmits(['change'])

function onChange(idx: number) {
  emit('change', idx)
  if (idx in pages) {
    uni.redirectTo({ url: pages[idx] })
  }
}
</script>
