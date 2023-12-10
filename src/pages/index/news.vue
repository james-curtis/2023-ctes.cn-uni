<template>
  <default>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
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
      <!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
      <!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
      <view v-for="item in dataList" :key="item.id" class="item">
        <view class="item-title">{{ item.title }}</view>
      </view>
    </z-paging>
  </default>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import Default from '@/layout/default.vue'
import { useNewsStore } from '@/stores'

const newsStore = useNewsStore()
const { newsBannerHandler, newsHandler } = newsStore
const { newsBannerData } = storeToRefs(newsStore)
const defaultActive = computed(() => [newsBannerData.value[0].id])

onMounted(() => {
  newsBannerHandler.execute()
})

const paging = ref<any>(null)
const dataList = ref<{ title: string; id: string }[]>([])

const queryList = (pageNo: number, pageSize: number) => {
  newsHandler.execute().then(
    (e) => paging.value.complete(e),
    () => paging.value.complete(false)
  )
}

onMounted(() => {
  // paging.value.reload()
})
</script>

<style scoped></style>
