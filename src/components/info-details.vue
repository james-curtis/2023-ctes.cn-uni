<template>
  <view class="header" style="margin: 5%">
    <view style="display: flex; justify-content: space-between">
      <tm-text :label="title" />
      <tm-image :src="icons.menu" :height="25" :width="25" unit="px" />
    </view>
    <tm-text>{{ tips }}</tm-text>
  </view>
  <view class="charts-box">
    <slot />
  </view>
  <view class="list">
    <view class="list-item">
      <view class="list-item__left">
        <text>{{ gridInfo?.today.label }}</text>
      </view>
      <view class="list-item__right">
        <text style="color: green; font-size: 0.8em">{{
          gridInfo?.today.percentage
        }}</text>
        <text>{{ gridInfo?.today.value }} °C</text>
      </view>
    </view>
    <view class="list-item">
      <view class="list-item__left">
        <text>{{ gridInfo?.yesterday.label }}</text>
      </view>
      <view class="list-item__right">
        <text v-if="gridInfo?.yesterday.percentage" style="color: green">{{
          gridInfo?.yesterday.percentage
        }}</text>
        <text>{{ gridInfo?.yesterday.value }} °C</text>
      </view>
    </view>
  </view>
  <view class="tips" v-text="desc" />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { PropType } from 'vue'
import type { GridTipsData } from '@/interface/info-details'
import { icons } from '@/config/icons'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  tips: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  gridInfo: {
    required: true,
    type: Object as PropType<GridTipsData>,
  },
})

const { tips, title, desc, gridInfo } = toRefs(props)
</script>

<style lang="scss" scoped>
.charts-box {
  height: 300px;
}

.tips {
  margin: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgb(144, 147, 153);
  padding: 15px;
}

.list {
  display: flex;
  flex-direction: column;

  .list-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e6eb;
    padding: 5px 0;
    margin: 0 10px;

    &:last-child {
      border: none;
    }

    &__left,
    &__right {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
