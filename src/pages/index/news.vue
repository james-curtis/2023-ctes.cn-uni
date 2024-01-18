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
      <tm-collapse
        :default-active-key="defaultActive"
        border="2"
        icon-pos="right"
      >
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
      <view v-for="item in dataList" :key="item.id" class="news-list">
        <view class="news-cell">
          <tm-image
            preview
            :width="240"
            :height="160"
            src="https://store.tmui.design/api_v2/public/random_picture"
          />
          <view class="news-cell__text">
            <tm-text :label="item.title" />
            <view class="news-cell__tips">
              <tm-text
                :label="`资讯模式 | ${dayjs(item.createTime).format(
                  'YYYY-DD-MM'
                )}`"
                color="#909399"
              />
              <tm-text :label="`${item.read} 阅读`" color="#909399" />
            </view>
          </view>
        </view>
        <tm-divider color="black" />
      </view>
    </z-paging>
  </default>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'
import type { NewsItem } from '@/interface/news'
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
const dataList = ref<NewsItem[]>([])

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

<style scoped lang="scss">
.news-list {
  margin: 10px 10px 0;
}
.news-cell {
  display: flex;
  gap: 10px;
  &__text {
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  }
  &__tips {
    display: flex;
    justify-content: space-between;
  }
}
</style>
