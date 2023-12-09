<template>
  <default>
    <view>
      <tm-image
        :width="60"
        :height="60"
        src="https://picsum.photos/100"
        unit="px"
      />
    </view>
  </default>
</template>

<script setup lang="ts">
import Default from '@/layout/default.vue'
import TmImage from '@/tmui/components/tm-image/tm-image.vue'
</script>

<style lang="scss" scoped></style>
