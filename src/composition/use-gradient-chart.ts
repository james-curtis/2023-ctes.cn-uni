import { ref } from 'vue'

export function useGradientChart() {
  const chartOps = ref({
    color: ['#758C71', '#91CB74', '#FAC858', '#3CA272', '#ececc7'],
    padding: [10, 25, 0, 15],
    xAxis: {
      // boundaryGap: 'justify',
      // format: 'xAxisDemo2',
      rotateLabel: true,
    },
    yAxis: {
      gridType: 'dash',
      // dashLength: 2,
      data: [
        {
          min: 30,
          max: 40,
        },
      ],
    },
    extra: {
      area: {
        type: 'curve',
        opacity: 0.2,
        addLine: true,
        width: 2,
        gradient: true,
        activeType: 'hollow',
      },
    },
  })

  return { chartOps }
}
