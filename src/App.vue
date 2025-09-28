<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/counter">计数器</router-link>
      <router-link to="/todos">待办事项</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Vue 3.5 + Pinia + TypeScript Demo 应用已启动')
})
</script>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>

