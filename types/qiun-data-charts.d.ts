import uCharts from '@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QiunDataCharts: typeof uCharts
  }
}
