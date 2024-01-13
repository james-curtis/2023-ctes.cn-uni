<template>
  <default>
    <info-details
      title="宝宝体温"
      tips="注意时刻关注宝宝噢..."
      :desc="desc"
      :grid-info="gridInfo"
    >
      <view class="charts-box">
        <qiun-data-charts
          type="area"
          :opts="chartOps"
          :chart-data="chartData"
        />
      </view>
    </info-details>
  </default>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GridTipsData } from '@/interface/info-details'
import Default from '@/layout/default.vue'
import InfoDetails from '@/components/info-details.vue'
import { useGradientChart } from '@/composition/use-gradient-chart'
import { getTemperature } from '@/api/mock/life-indicator'

const gridInfo = ref<GridTipsData>({
  today: { label: '今日体温', value: '36.61', percentage: '12%' },
  yesterday: { label: '今日体温', value: '36.61', percentage: '12%' },
})
const desc = ref<string>(
  '您家宝宝的温度是xx，/在正常范围之内，非常健康哦，祝您的宝宝健康快乐平安长大！/已经超出正常温度了哦，建议即刻送往医院治疗！饮食上……/有点低烧哦，建议补充体液，饮食……'
)

const chartData = ref()
getTemperature().then((e) => (chartData.value = e))

const { chartOps } = useGradientChart()
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
