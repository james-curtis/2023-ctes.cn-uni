<template>
  <default>
    <view class="mb-32 mx-32">
      <tm-image
        :round="25"
        :width="60"
        :height="60"
        error-label="加载错误"
        src="https://picsum.photos/100"
        unit="px"
      />
    </view>
    <tm-divider :border="10" color="black" />
    <view class="mb-32 mx-32 round-5 overflow">
      <tm-cell
        show-avatar
        :avatar="icon.account"
        color="rgb(245,245,245)"
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="账号"
      />
      <!-- <tm-divider color="green"></tm-divider> -->
      <tm-cell
        show-avatar
        :avatar="icon.fav"
        color="rgb(245,245,245)"
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="收藏"
      />
      <tm-cell
        show-avatar
        :avatar="icon.contact"
        color="rgb(245,245,245)"
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="客服"
      />
      <tm-cell
        show-avatar
        :avatar="icon.settings"
        color="rgb(245,245,245)"
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="设置"
      />
    </view>
  </default>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Default from '@/layout/default.vue'
import { icons } from '@/config/icons'

const icon = reactive(icons)
</script>

<style lang="scss" scoped></style>
