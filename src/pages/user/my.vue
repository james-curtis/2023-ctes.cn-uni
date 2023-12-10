<template>
  <default>
    <view class="mb-32 mx-32">
      <tm-image
        :width="60"
        :height="60"
        src="https://picsum.photos/100"
        unit="px"
      />
    </view>

    <view class="mb-32 mx-32 round-3 overflow">
      <tm-cell
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="账号"
      />
      <tm-cell
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="收藏"
      />
      <tm-cell
        bottom-border
        :margin="[0, 0]"
        :title-font-size="30"
        title="客服"
      />
      <tm-cell :margin="[0, 0]" :title-font-size="30" title="设置" />
    </view>
  </default>
</template>

<script setup lang="ts">
import Default from '#/layout/default.vue'
</script>

<style lang="scss" scoped></style>
