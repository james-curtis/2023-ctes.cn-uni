<template>
  <default>
    <info-details
      title="颈部温度"
      tips="注意时刻关注宝宝噢..."
      :desc="desc"
      :grid-info="gridInfo"
      unit-label=" %"
    >
      <qiun-data-charts type="area" :opts="chartOps" :chart-data="chartData" />
    </info-details>
  </default>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GridTipsData } from '@/interface/info-details'
import Default from '@/layout/default.vue'
import InfoDetails from '@/components/info-details.vue'
import { useGradientChart } from '@/composition/use-gradient-chart'
import { getHumidity } from '@/api/mock/life-indicator'

const gridInfo = ref<GridTipsData>({
  today: { label: '今日温度', value: '36.61', percentage: '12%' },
  yesterday: { label: '昨日温度', value: '36.61' },
})
const desc = ref<string>(
  `1. 当前湿度正常，宝宝可以快乐玩耍哦<br>
2.注意！当前湿度偏高，请注意观察宝宝的状态，及时给宝宝擦口水哦。另外，可以通过让宝宝掌握吸允和吞咽技巧，给宝宝吃一些健胃的食物让宝宝减少流口水频率。<br>
3.注意！当前湿度超高。请注意观察宝宝的情况，应该及时的到专业的医院采取方法进行治疗，防止宝宝出现一些口腔疾病，并做好宝宝身体的护理。`
)

const chartData = ref()
getHumidity().then((e) => {
  chartData.value = e
  const today =
    e.series[0].data.reduce(
      (prev, cursor) => ((prev += Number(cursor)), prev),
      0
    ) / e.series[0].data.length
  const yesterday =
    e.series[1].data.reduce(
      (prev, cursor) => ((prev += Number(cursor)), prev),
      0
    ) / e.series[0].data.length
  gridInfo.value = {
    today: {
      label: '今日体温',
      value: today.toFixed(2),
      percentage: `${((today - yesterday) / yesterday).toFixed(2)}%`,
    },
    yesterday: {
      label: '昨日体温',
      value: yesterday.toFixed(2),
    },
  }
})

const { chartOps } = useGradientChart()
Object.assign(chartOps.value, { yAxis: { data: [{ min: 50, max: 90 }] } })
</script>
