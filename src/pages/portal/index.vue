<template>
  <default>
    <view class="charts-box">
      <qiun-data-charts type="column" :chart-data="chartData" />
    </view>
    <tm-divider align="center" label="健康日历" />
    <tm-calendar-view />
  </default>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Default from '@/layout/default.vue'

const chartData = ref()

onMounted(() => {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    const res = {
      categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
      series: [
        {
          name: '目标值',
          data: [35, 36, 31, 33, 13, 34],
        },
        {
          name: '完成量',
          data: [18, 27, 21, 24, 6, 28],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
})
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
