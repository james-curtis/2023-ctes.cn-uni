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
  subPackages: [
    {
      root: 'pages/care',
      pages: [
        {
          path: 'temperature',
          style: {
            navigationBarTitleText: '宝宝体温',
          },
        },
      ],
    },
    {
      root: 'pages/user',
      pages: [
        {
          path: 'contact',
          style: {
            navigationBarTitleText: '客服',
          },
        },
        {
          path: 'login',
          style: {
            navigationBarTitleText: '登录',
          },
        },
        {
          path: 'my',
          style: {
            navigationBarTitleText: '我的',
          },
        },
        {
          path: 'settings',
          style: {
            navigationBarTitleText: '设置',
          },
        },
      ],
    },
  ],
  globalStyle: {
    navigationBarTitleText: 'title',
    navigationBarBackgroundColor: '#FFFFFF',
  },
})
