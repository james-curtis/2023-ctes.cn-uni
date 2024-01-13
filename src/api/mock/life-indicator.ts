export async function getTemperature({ date }: { date?: string } = {}) {
  return {
    series: [
      {
        name: '今日',
        data: [
          [10000, 55],
          [30000, 25],
          [50000, 55],
          [70000, 25],
          [90000, 55],
        ],
      },
      {
        name: '昨日',
        data: [
          [0, 25],
          [20000, 55],
          [40000, 25],
          [60000, 55],
          [80000, 25],
        ],
      },
    ],
  }
}
