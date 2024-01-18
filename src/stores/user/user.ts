import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo } from '@/interface/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userAccountInfo = ref<UserInfo>({
      account: 'test ac',
      nickname: 'test name',
      avatar: 'https://uviewui.com/common/logo.png',
    })

    return {
      userAccountInfo,
    }
  },
  { unistorage: true }
)
