<template>
  <default>
    <view class="px-10 pt-12">
      <tm-input
        color="rgb(243,244,246)"
        focus-color="rgb(243,244,246)"
        :round="16"
        placeholder="请输入关键字"
        show-clear
        prefix="tmicon-search"
      />
    </view>
    <tm-collapse :default-active-key="defaultActive">
      <tm-collapse-item
        v-for="item in newsBannerData"
        :key="item.id"
        :name="item.id"
        :title="item.title"
      >
        <tm-text class="px-10" :label="item.text" />
      </tm-collapse-item>
    </tm-collapse>
  </default>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import Default from '@/layout/default.vue'
import TmInput from '@/tmui/components/tm-input/tm-input.vue'
import TmCollapse from '@/tmui/components/tm-collapse/tm-collapse.vue'
import TmCollapseItem from '@/tmui/components/tm-collapse-item/tm-collapse-item.vue'
import TmText from '@/tmui/components/tm-text/tm-text.vue'
import { useNewsStore } from '@/stores'

const newsStore = useNewsStore()
const { newsBannerData } = storeToRefs(newsStore)
const defaultActive = computed(() => [newsBannerData.value[0].id])

onMounted(() => {
  newsStore.refreshNewsBannerData()
})
</script>

<style scoped></style>
