<template>
  <default>
    <view>
      <view>宝宝体温</view>
      <view>注意时刻关注宝宝噢...</view>
    </view>
    <view class="charts-box">
      <qiun-data-charts type="column" :chart-data="chartData" />
    </view>
    <view class="list">
      <view class="list-item">
        <view class="list-item__left">
          <text>今日体温</text>
        </view>
        <view class="list-item__right">
          <text>36.61</text>
          <text>12%</text>
        </view>
      </view>
      <view class="list-item">
        <view class="list-item__left">
          <text>昨日体温</text>
        </view>
        <view class="list-item__right">
          <text>36.61</text>
          <text>12%</text>
        </view>
      </view>
    </view>
    <view class="tips" v-text="tipsContent" />
  </default>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Default from '#/layout/default.vue'

const title = ref('Hello')
const chartData = ref()

const tipsContent = computed(() => {
  return `您家宝宝的温度是xx，/在正常范围之内，非常健康哦，祝您的宝宝健康快乐平安长大！/已经超出正常温度了哦，建议即刻送往医院治疗！饮食上……/有点低烧哦，建议补充体液，饮食……`
})

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
