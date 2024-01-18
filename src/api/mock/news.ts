import { Random } from 'mockjs'
import type { NewsBannerItem, NewsItem } from '@/interface/news'

export async function getNewsBanner(): Promise<NewsBannerItem[]> {
  return [
    {
      title: '产品介绍',
      id: '1',
      text: `磨牙期婴幼童智能监测透明罩衣是一项创新性的设计，旨在通过智能监测技术，帮助家长更好地了解宝宝的磨牙情况，提高宝宝的舒适度和健康水平。
这种智能监测透明罩衣采用了高科技传感器和智能算法。不仅可以实时监测婴幼童的磨牙活动，还可以记录下婴幼童的体温，颈间湿度，磨牙压力的数据，并通过无线连接传输到手机或其他设备上，供家长在小程序上查看和分析。
使用智能监测透明罩衣可以帮助家长更好地了解婴幼童的磨牙情况，及时发现异常或问题。同时，它还可以提供一些辅助功能，比如提醒家长给婴幼童进行口腔护理或采取其他措施来缓解不适。
该项设计为婴幼童的健康提供了保障，同时感谢广大用户的使用！`,
    },
  ]
}

export async function getNewsList(): Promise<NewsItem[]> {
  return Array.from({ length: 10 }).map((e, idx) => ({
    id: String(idx),
    click: String(Random.integer(10, 999)),
    desc: Random.cparagraph(5),
    title: Random.pick([
      '“衣”心向童产品使用介绍',
      '体温过低对新生儿尤其是早产或低出生体重的婴儿构成更大的危险。',
      '新生儿体温调节有哪些特点呢?',
      '给新生儿测量体温并不像给成人测量那么简单',
      '如果健康的婴儿的体温较低，则可能并不表示有问题。但是，非常低的温度可能指示或引起严重的健康问题。',
      '体温偏低的最常见原因是，婴儿，尤其是新生儿，不能像年龄较大的儿童和成人那样调节体温。因此，即使暴露在稍低的温度下，也更有可能导致新生儿的体温降低。',
    ]),
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
