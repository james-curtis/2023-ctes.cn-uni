import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo } from '@/interface/user'
import logo from '@/static/logo.png'

export const useUserStore = defineStore(
  'user',
  () => {
    const userAccountInfo = ref<UserInfo>({
      account: 'test_account01',
      nickname: '小红薯',
      avatar: logo,
    })

    return {
      userAccountInfo,
    }
  },
  { unistorage: true }
)
