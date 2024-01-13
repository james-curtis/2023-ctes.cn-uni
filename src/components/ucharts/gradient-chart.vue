<template>
  <qiun-data-charts type="area" v-bind="attrs" :opts="chartOps" />
</template>
<script setup lang="ts">
import { ref, useAttrs } from 'vue'

const attrs = useAttrs()
const chartOps = ref({
  color: ['#758C71', '#91CB74', '#FAC858', '#3CA272'],
  padding: [15, 15, 0, 15],
  enableScroll: false,
  legend: {},
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    gridType: 'dash',
    dashLength: 2,
  },
  extra: {
    area: {
      type: 'curve',
      opacity: 0.2,
      addLine: true,
      width: 2,
      gradient: true,
      activeType: 'hollow',
    },
  },
})
</script>
<style scoped lang="scss"></style>
