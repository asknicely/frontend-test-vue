import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', () => {
  const currentNotificationId = ref('')
  
  function setNotificationId(id: string) {
    currentNotificationId.value = id
  }

  return { currentNotificationId, setNotificationId }
})
