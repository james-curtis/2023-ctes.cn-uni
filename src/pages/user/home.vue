<template>
  <Default color="#ededed">
    <u-navbar :is-back="false" title="" :border-bottom="false">
      <view class="u-flex u-row-right" style="width: 100%">
        <view class="camera u-flex u-row-center">
          <u-icon name="camera-fill" color="#000000" size="48" />
        </view>
      </view>
    </u-navbar>
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
      <view class="u-m-r-10">
        <u-avatar :src="userAccountInfo.avatar" size="140" />
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">{{ userAccountInfo.nickname }}</view>
        <view class="u-font-14 u-tips-color"
          >账号: {{ userAccountInfo.account }}</view
        >
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="scan" color="#969799" size="28" />
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28" />
      </view>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="rmb-circle" title="支付" />
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="star" title="收藏" />
        <u-cell-item icon="photo" title="相册" />
        <u-cell-item icon="coupon" title="卡券" />
        <u-cell-item icon="heart" title="关注" />
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="setting" title="设置" />
      </u-cell-group>
    </view>
  </Default>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Default from '@/layout/default.vue'
import { useUserStore } from '@/stores/user/user'

const userStore = useUserStore()
const { userAccountInfo } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
.camera {
  width: 54px;
  height: 44px;

  &:active {
    background-color: #ededed;
  }
}
.user-box {
  background-color: #fff;
}
</style>
