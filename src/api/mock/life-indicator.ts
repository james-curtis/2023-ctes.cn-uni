import lodash from 'lodash'

export function getRandomData(
  {
    randomFn,
  }: {
    randomFn: () => number | string
  } = { randomFn: () => lodash.random(36.2, 37.3) }
): Array<string> {
  return Array.from({ length: 8 }).map((e, idx) =>
    Number(randomFn()).toFixed(2)
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

export async function getPressure({ date }: { date?: string } = {}) {
  return {
    categories: Array.from({ length: 8 }).map(
      (e, idx) => `${String(idx * 3 + 1).padStart(2, '0')}:00`
    ),
    series: [
      {
        name: '今日',
        data: getRandomData({ randomFn: () => lodash.random(30, 40, true) }),
      },
      {
        name: '昨日',
        data: getRandomData({ randomFn: () => lodash.random(30, 40, true) }),
      },
    ],
  }
}

export async function getHumidity({ date }: { date?: string } = {}) {
  return {
    categories: Array.from({ length: 8 }).map(
      (e, idx) => `${String(idx * 3 + 1).padStart(2, '0')}:00`
    ),
    series: [
      {
        name: '今日',
        data: getRandomData({ randomFn: () => lodash.random(60, 80, true) }),
      },
      {
        name: '昨日',
        data: getRandomData({ randomFn: () => lodash.random(60, 80, true) }),
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
