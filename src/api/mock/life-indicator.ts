import { Random } from 'mockjs'

export function getRandomData(): Array<string> {
  return Array.from({ length: 8 }).map((e, idx) =>
    Random.float(34, 38).toFixed(2)
  )
}

export async function getTemperature({ date }: { date?: string } = {}) {
  return {
    categories: Array.from({ length: 8 }).map(
      (e, idx) => `${String(idx * 3 + 1).padStart(2, '0')}:00`
    ),
    series: [
      {
        name: '今日',
        data: getRandomData(),
      },
      {
        name: '昨日',
        data: getRandomData(),
      },
    ],
  }
}

export async function getTodayTemperature({ date }: { date?: string } = {}) {
  return {
    categories: Array.from({ length: 8 }).map(
      (e, idx) => `${String(idx * 3 + 1).padStart(2, '0')}:00`
    ),
    series: [
      {
        name: '今日',
        data: getRandomData(),
      },
    ],
  }
}
