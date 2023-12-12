<template>
  <default>
    <view class="mb-32 mx-32">
      <tm-image
        :round="25"
        :width="60"
        :height="60"
        errorLabel='加载错误'
        src="https://picsum.photos/100"
        unit="px"
      />
    </view>
    <tm-divider :border="10" color="black"></tm-divider>
    <view class="mb-32 mx-32 round-5 overflow">
      <tm-cell
        showAvatar
        :avatar="icon.account"
        color="rgb(245,245,245)"
        bottomBorder
        :margin="[0, 0]"
        :titleFontSize="30"
        title="账号"
      >
      </tm-cell>
      <!-- <tm-divider color="green"></tm-divider> -->
      <tm-cell
        showAvatar
        :avatar="icon.fav"
        color="rgb(245,245,245)"
        bottomBorder
        :margin="[0, 0]"
        :titleFontSize="30"
        title="收藏"
      >
      </tm-cell>
      <tm-cell
        showAvatar
        :avatar="icon.contact"
        color="rgb(245,245,245)"
        bottomBorder
        :margin="[0, 0]"
        :titleFontSize="30"
        title="客服"
      >
      </tm-cell>
      <tm-cell
        showAvatar
        :avatar="icon.settings"
        color="rgb(245,245,245)"
        bottomBorder
        :margin="[0, 0]"
        :titleFontSize="30"
        title="设置"
      >
      </tm-cell>
    </view>
  </default>
</template>

<script setup lang="ts">
import Default from '@/layout/default.vue'
import tmDivider from '@/tmui/components/tm-divider/tm-divider.vue'
import { icons } from '@/config/icons'
import { reactive } from 'vue'

const icon = reactive(icons)
</script>

<style lang="scss" scoped></style>
