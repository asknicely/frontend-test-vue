<template>
  <div class="notification-item" @click="handleNotificationClick">
    <div class="notification-item-avatar">
      <div v-if="!notification.read" class="unread-dot" />
      <p class="avatar-circle" :class="getAvatarColor()">{{getAuthorInitials(notification.author)}}</p>
    </div>
    <div class="notification-item-content">
      <p>{{notification.title}}</p>
      <p>{{notification.preview_text}}</p>
      <div class="notification-item-footer">
        <p>{{notification.author}}</p>
        <p>{{notification.created}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface INotificationItem {
    id: string
    title: string
    preview_text: string
    full_text: string
    author: string
    created: string
    read: boolean
    available_actions: string[]
  }
  const props = defineProps<{
    notification: INotificationItem
  }>()

  const handleNotificationClick = async() => {
    const availableActions = props.notification.available_actions

    if (availableActions.includes('CREATE_TODO')) {
      const actionResponse = await fetch('https://o59ee.wiremockapi.cloud/notifications/action', {
        method: 'POST',
        body: JSON.stringify({ id: props.notification.id, action: "TODO" })
      });
      const actionResponseData = await actionResponse.json();

      if (actionResponse.status >= 400 && actionResponse.status <= 499) {
        alert(`ERROR: ${actionResponseData.error}`)
      } else {
        console.log("Success", actionResponseData)
      }
    } else {
      const ignoreResponse = await fetch('https://o59ee.wiremockapi.cloud/notifications/ignore', {
        method: 'POST',
        body: JSON.stringify({ id: props.notification.id })
      });
      if (ignoreResponse.status >= 400 && ignoreResponse.status <= 499) {
        alert(`ERROR ignoring Notification ID: ${props.notification.id}`)
      } else {
        console.log("Notification ID:", props.notification.id, "ignored!")
      }
    }
  }

  const getAuthorInitials = (authorName) => {
    const initials = authorName?.split(" ")?.map((name) => name?.charAt(0)) || [""]
    return initials.join("")
  }

  const getAvatarColor = () => {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    const selectedColorIndex = Math.floor(Math.random()*6)
    return `avatar-circle--dark-${colors[selectedColorIndex]}`
  }
</script>

<style scoped lang="scss">
.notification-item {
    padding: 1rem 1rem 1rem 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--light-grey-color);
    display: flex;

    .notification-item-avatar {
      position: relative;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .unread-dot {
        position: absolute;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #fff;
      }

      .avatar-circle {
        padding: 0.5rem;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin: 0;
        text-align: center;
        line-height: 25px;
        font-weight: bold;

        &--dark-red {
          background-color: #C23B23;
        }

        &--dark-orange {
          background-color: #F39A27;
        }

        &--dark-yellow {
          background-color: #EADA52;
        }

        &--dark-green {
          background-color: #03C03C;
        }

        &--dark-blue {
          background-color: #579ABE;
        }

        &--dark-purple {
          background-color: #976ED7;
        }
      }
    }

    .notification-item-footer {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;

      p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        color: var(--light-grey-color);
      }
    }
  }
</style>