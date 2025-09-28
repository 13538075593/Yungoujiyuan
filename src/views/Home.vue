<template>
  <div class="home">
    <div class="hero">
      <h1>Vue 3.5 + Pinia + TypeScript Demo</h1>
      <p>这是一个展示 Vue 3.5、Pinia 状态管理、TypeScript 和 Vue Router 的演示项目</p>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>🚀 Vue 3.5</h3>
        <p>使用最新的 Vue 3.5 版本，体验 Composition API 的强大功能</p>
      </div>
      
      <div class="feature-card">
        <h3>🍍 Pinia</h3>
        <p>现代化的状态管理库，替代 Vuex 的最佳选择</p>
      </div>
      
      <div class="feature-card">
        <h3>📘 TypeScript</h3>
        <p>完整的 TypeScript 支持，提供类型安全和更好的开发体验</p>
      </div>
      
      <div class="feature-card">
        <h3>🛣️ Vue Router</h3>
        <p>官方路由管理器，支持路由导航和页面切换</p>
      </div>
    </div>

    <div class="tech-stack">
      <h2>技术栈</h2>
      <ul>
        <li>Vue 3.5 - 渐进式 JavaScript 框架</li>
        <li>Pinia - 状态管理</li>
        <li>TypeScript - 类型系统</li>
        <li>Vue Router - 路由管理</li>
        <li>Vite - 构建工具</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('首页组件已加载')
})
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem 0;
}

.hero {
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.tech-stack {
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.tech-stack h2 {
  margin-bottom: 1rem;
  color: #333;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
}

.tech-stack li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.tech-stack li:last-child {
  border-bottom: none;
}
</style>

