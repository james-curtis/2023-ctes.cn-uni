<template>
  <default>
    <view class="charts-box">
      <qiun-data-charts type="area" :opts="chartOps" :chart-data="chartData" />
    </view>

    <view class="grid-link">
      <grid-banner />
    </view>

    <view class="calendar">
      <tm-divider align="center" label="健康日历" />
      <tm-calendar-view @confirm="onCalendarConfirm" />
    </view>
  </default>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PageQuery } from '@/interface/calendar'
import Default from '@/layout/default.vue'
import GridBanner from '@/components/grid-banner.vue'
import { useGradientChart } from '@/composition/use-gradient-chart'
import { getTodayTemperature } from '@/api'

const chartData = ref()

const { chartOps } = useGradientChart()
getTodayTemperature().then((e) => {
  chartData.value = e
})

function onCalendarConfirm(date: Array<string>) {
  const queryObj: PageQuery = { date: date[0] }
  const query = Object.entries(queryObj)
    .map((e) => `${e[0]}=${encodeURIComponent(e[1])}`)
    .join('&')
  uni.navigateTo({
    url: `/pages/index/calendar?${query}`,
  })
}
</script>

<style lang="scss" scoped>
.charts-box {
  height: 300px;
}

.grid-link {
  display: flex;
  justify-content: center;
}

.calendar {
  margin: 0 10px 0;
}
</style>
