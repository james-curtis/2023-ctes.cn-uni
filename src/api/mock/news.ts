import { Random } from 'mockjs'
import type { NewsBannerItem, NewsItem } from '@/interface/news'

export async function getNewsBanner(): Promise<NewsBannerItem[]> {
  return [
    {
      title: Random.ctitle(4, 6),
      id: `1`,
      text: Random.cparagraph(20),
    },
  ]
}

export async function getNewsList(): Promise<NewsItem[]> {
  return Array.from({ length: 10 }).map((e, idx) => ({
    id: String(idx),
    click: String(Random.integer(10, 999)),
    desc: Random.cparagraph(5),
    title: Random.ctitle(8, 20),
    pic: Random.image(),
    read: String(Random.integer(10, 999)),
    forumId: String(Random.integer()),
    forumName: Random.ctitle(),
    createTime: Random.datetime(),
    updateTime: Random.datetime(),
    currentPage: String(Random.integer(10, 999)),
    totalPage: String(Random.integer(10, 999)),
  }))
}
