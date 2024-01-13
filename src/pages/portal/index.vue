<template>
  <default>
    <view>
      <view class="charts-box">
        <qiun-data-charts
          type="area"
          :opts="chartOps"
          :chart-data="chartData"
        />
      </view>

      <view class="grid-link">
        <grid-banner />
      </view>

      <tm-divider align="center" label="健康日历" />
      <tm-calendar-view />
    </view>
  </default>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Default from '@/layout/default.vue'
import GridBanner from '@/components/grid-banner.vue'
import { useGradientChart } from '@/composition/use-gradient-chart'

const chartData = ref()

const { chartOps } = useGradientChart()
onMounted(() => {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    const res = {
      series: [
        {
          name: '曲线图',
          data: [
            [10000, 55],
            [30000, 25],
            [50000, 55],
            [70000, 25],
            [90000, 55],
          ],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
})
</script>

<style lang="scss" scoped>
.charts-box {
  margin: 0 15px 0 0;
  height: 300px;
}

.grid-link {
  display: flex;
  justify-content: center;
}
</style>
