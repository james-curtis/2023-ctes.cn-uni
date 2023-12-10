import un from '@uni-helper/uni-network'

export type NewsBannerData = {
  title: string
  id: string
  text: string
}[]

export async function getNews(): Promise<NewsBannerData> {
  un.get('/')
  return [
    {
      title: '产品介绍 api',
      id: '1',
      text: `磨牙期婴幼童智能监测透明罩衣是一项创新性的设计，旨在通过智能监测技术，帮助家长更好地了解宝宝的磨牙情况，提高宝宝的舒适度和健康水平。
这种智能监测透明罩衣采用了高科技传感器和智能算法。不仅可以实时监测婴幼童的磨牙活动，还可以记录下婴幼童的体温，颈间湿度，磨牙压力的数据，并通过无线连接传输到手机或其他设备上，供家长在小程序上查看和分析。
使用智能监测透明罩衣可以帮助家长更好地了解婴幼童的磨牙情况，及时发现异常或问题。同时，它还可以提供一些辅助功能，比如提醒家长给婴幼童进行口腔护理或采取其他措施来缓解不适。
该项设计为婴幼童的健康提供了保障，同时感谢广大用户的使用！`,
    },
  ]
}
