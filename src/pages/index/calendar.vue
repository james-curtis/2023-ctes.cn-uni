<template>
  <default>
    <view class="record-list">
      <tm-calendar-view v-model:model-str="modelStr" v-model="currentDate" />
      <tm-divider align="center" label="健康日历" />
      <view v-for="item in careRecord" :key="item.id" class="record">
        <tm-image
          :width="45"
          :height="45"
          unit="px"
          class="record__image"
          :src="item.image"
        />
        <view class="record__desc">
          <text class="record__title">{{ item.title }}</text>
          <text class="record__sub">{{ item.subtitle }}</text>
        </view>
        <view class="record__time">{{ item.datetime }}</view>
      </view>
    </view>
  </default>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { CalendarRecordItem, PageQuery } from '@/interface/calendar'
import Default from '@/layout/default'
import { getCalendarRecord } from '@/api'

const careRecord = ref<CalendarRecordItem[]>([])

const currentDate = ref()
const modelStr = ref()
onLoad((q) => {
  const query = q as PageQuery
  nextTick(() => {
    currentDate.value = [decodeURIComponent(query.date)]
  })
})

watch(
  () => modelStr.value,
  (date: string) => onCalendarClick(date)
)

function onCalendarClick(date: string) {
  getCalendarRecord(date).then((e) => {
    careRecord.value = e
  })
}
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 300px;
}

.record-list {
  margin: 0 10px 0;
}

.record {
  display: flex;
  padding: 12px 0;
  margin: 0 16px;
  border-bottom: 1px solid rgb(231, 230, 228);
  gap: 12px;
  &__image {
    width: 45px;
    overflow: hidden;
  }
  &__desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__time {
    color: rgb(144, 145, 147);
    width: 40px;
  }
  &__sub {
    font-size: 14px;
    color: rgb(144, 145, 147);
  }
}
</style>
