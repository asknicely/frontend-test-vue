<template>
  <div class="page-wrapper">
    <header>
      <h1>Notifications</h1>
    </header>
    <main>
      <div v-for="notification in notifications" :key="notification.id">
        <NotificationItem :notification="notification" />
      </div>
    </main>
    <footer>
      <p>Home</p>
      <p class="active">Notifications</p>
      <p>Logout</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import NotificationItem from '../components/NotificationItem.vue'

  const notifications = ref([])

  onMounted(async () => {
    const response = await fetch('https://o59ee.wiremockapi.cloud/notifications');
    const notificationsJSON = await response.json();
    notifications.value = notificationsJSON
  })
</script>

<style scoped lang="scss">
  @import '../assets/base.css';
  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;

    header {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid #fff;
    }

    main {
      flex: 1;
      overflow: scroll;
    }

    footer {
      padding: 1rem;
      background-color: var(--footer-color);
      display: flex;
      justify-content: space-around;
      
      p {
        font-weight: bold;
      }

      .active {
        color: var(--light-grey-color)
      }
    }
  }
</style>
