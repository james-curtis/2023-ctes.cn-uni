import { Random } from 'mockjs'
import dayjs from 'dayjs'
import type { CalendarRecordItem } from '@/interface/calendar'

export async function getCalendarRecord(
  date: string,
  page?: number
): Promise<CalendarRecordItem[]> {
  return Array.from({ length: 10 }).map(() => ({
    title: Random.ctitle(4, 6),
    id: `1`,
    datetime: dayjs(new Date()).format('HH:mm'),
    subtitle: Random.cparagraph(5),
    image: 'https://picsum.photos/200',
  }))
}
