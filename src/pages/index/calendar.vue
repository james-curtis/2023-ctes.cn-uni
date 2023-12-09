<template>
  <default>
    <tm-calendar-view />
    <tm-divider align="center" label="健康日历" />
    <view class="record-list">
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
          <text class="record__sub">{{ item.subtitle }}}</text>
        </view>
        <view class="record__time">{{ item.datetime }}</view>
      </view>
    </view>
  </default>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import Default from '@/layout/default.vue'
import TmDivider from '@/tmui/components/tm-divider/tm-divider.vue'
import TmCalendarView from '@/tmui/components/tm-calendar-view/tm-calendar-view.vue'
import TmImage from '@/tmui/components/tm-image/tm-image.vue'

const careRecord = ref([
  {
    id: 1,
    datetime: dayjs('2023-12-9 16:49:57').format('HH:mm'),
    title: '喂药记录',
    subtitle: '描述信息',
    image: 'https://picsum.photos/100',
  },
  {
    id: 2,
    datetime: dayjs(new Date()).format('HH:mm'),
    title: '喂药记录',
    subtitle: '描述信息',
    image: 'https://picsum.photos/200',
  },
])
</script>

<style lang="scss" scoped>
.charts-box {
  width: 100%;
  height: 300px;
}

.record-list {
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
