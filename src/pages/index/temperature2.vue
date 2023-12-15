<template>
  <default>
    <view>
      <view>
        <view class="header" style="margin: 5%">
          <view style="display: flex; justify-content: space-between">
            <tm-text label="宝宝体温" />
            <tm-image
              :src="icon.icon"
              :height="25"
              :width="25"
              style="float: right"
              unit="px"
            />
          </view>
          <tm-text>注意时刻关注宝宝噢...</tm-text>
        </view>
      </view>
      <view class="charts-box">
        <view>
          <qiun-data-charts type="tarea" :chart-data="chartData" />
        </view>
      </view>
      <view class="list">
        <view class="list-item">
          <view class="list-item__left">
            <text>今日体温</text>
          </view>
          <view class="list-item__right">
            <text>36.61</text>
            <tm-image :src="icon.vector" :width="33" :height="21" />
            <tm-text color="green">12%</tm-text>
          </view>
        </view>
        <view class="list-item">
          <view class="list-item__left">
            <text>昨日体温</text>
          </view>
          <view class="list-item__right">
            <text>36.61</text>
            <tm-image :src="icon.vector" :width="33" :height="21" />
            <tm-text color="green">12%</tm-text>
          </view>
        </view>
      </view>
    </view>
    <view class="tips" v-text="tipsContent" />
  </default>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import Default from '@/layout/default.vue'
import { icons } from '@/config/icons'

const icon = reactive(icons)

const title = ref('Hello')
const chartData = ref()

const tipsContent = computed(() => {
  return `您家宝宝的温度是xx，/在正常范围之内，非常健康哦，祝您的宝宝健康快乐平安长大！/已经超出正常温度了哦，建议即刻送往医院治疗！饮食上……/有点低烧哦，建议补充体液，饮食……`
})

onMounted(() => {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    const res = {
      series: [
        {
          name: '今日',
          data: [
            [10000, 55],
            [30000, 25],
            [50000, 55],
            [70000, 25],
            [90000, 55],
          ],
        },
        {
          name: '昨日',
          data: [
            [0, 25],
            [20000, 55],
            [40000, 25],
            [60000, 55],
            [80000, 25],
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
  width: 100%;
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
      gap: 5px;
    }
  }
}
</style>
