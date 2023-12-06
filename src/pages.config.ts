// https://github.com/uni-helper/vite-plugin-uni-pages

import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: '首页',
      },
    },
  ],
  globalStyle: {
    navigationBarTitleText: 'title',
    navigationBarBackgroundColor: '#FFFFFF',
  },
})
