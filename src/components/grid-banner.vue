<template>
  <template v-for="item in gridList" :key="item.attrs.key">
    <tm-button
      v-bind="item.attrs"
      font-color="#6f7884"
      :transprent="true"
      :margin="[10]"
      :shadow="0"
      size="small"
      v-on="item.events"
    />
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({ itemKey: { type: String } })
type Props = typeof props
function useGridList({ props }: { props: Props }) {
  const gridList = ref([
    { attrs: { label: '体温', key: 'temperature' }, events: { click: toTemp } },
    {
      attrs: { label: '颈部温度', key: 'neck-temperature' },
      events: { click: toNeckTemp },
    },
    {
      attrs: { label: '咬合压力', key: 'pressure' },
      events: { click: toPressure },
    },
  ])

  gridList.value.map((e) => {
    if (e.attrs.key !== props.itemKey) return e
    Object.assign(e.attrs, { 'font-color': '#fff' })
    return e
  })

  function toTemp() {
    uni.navigateTo({
      url: '/pages/index/temperature',
    })
  }

  function toNeckTemp() {
    uni.navigateTo({
      url: '/pages/index/neck-temperature',
    })
  }

  function toPressure() {
    uni.navigateTo({
      url: '/pages/index/pressure',
    })
  }
  return { gridList }
}

const { gridList } = useGridList({ props })
</script>

<style lang="scss"></style>
