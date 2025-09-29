<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const switchLang = () => {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  localStorage.setItem('lang', locale.value)
}

onMounted(() => {
  // console.log('Vue 3.5 + Pinia + TypeScript Demo 应用已启动')
})
</script>

<style scoped>

</style>


