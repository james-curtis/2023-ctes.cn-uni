<template>
  <default>
    <view class="charts-box">
      <view>
        <view>
          <tm-text label="指标名" style="justify-content: center" />
          <tm-text label="422.61" style="justify-content: center" />
          <tm-text label="指标名" style="justify-content: center" />
        </view>
        <view>
          <qiun-data-charts type="tarea" :chart-data="chartData" />
        </view>
        <view style="display: flex">
          <tm-button
            style="margin-left: 25%"
            font-color="#6f7884"
            :transprent="true"
            :margin="[10]"
            :shadow="0"
            size="small"
            label="体温"
            @click="totemp"
          />
          <tm-button
            font-color="#6f7884"
            :transprent="true"
            :margin="[10]"
            :shadow="0"
            size="small"
            label="颈部温度"
            @click="totemp2"
          />
          <tm-button
            font-color="#6f7884"
            :transprent="true"
            :margin="[10]"
            :shadow="0"
            size="small"
            label="咬合压力"
            @click="toOcclusalPressure"
          />
        </view>
      </view>

      <view>
        <tm-divider align="center" label="健康日历" />
      </view>
      <view>
        <tm-calendar-view />
      </view>
    </view>
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

function totemp() {
  uni.navigateTo({
    url: '/pages/index/temperature',
  })
}

function totemp2() {
  uni.navigateTo({
    url: '/pages/index/temperature2',
  })
}

function toOcclusalPressure() {
  uni.navigateTo({
    url: '/pages/index/OcclusalPressure',
  })
}
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 10px;
}
</style>
