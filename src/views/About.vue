<template>
  <div class="about">
    <h2>关于这个项目</h2>
    
    <div class="about-content">
      <div class="section">
        <h3>🎯 项目目标</h3>
        <p>这个演示项目展示了如何使用现代前端技术栈构建一个功能完整的 Vue.js 应用程序。</p>
      </div>

      <div class="section">
        <h3>🛠️ 技术特性</h3>
        <ul class="feature-list">
          <li><strong>Vue 3.5:</strong> 使用最新的 Composition API 和响应式系统</li>
          <li><strong>TypeScript:</strong> 完整的类型支持，提供更好的开发体验</li>
          <li><strong>Pinia:</strong> 现代化的状态管理，替代 Vuex 的轻量级方案</li>
          <li><strong>Vue Router:</strong> 官方路由解决方案，支持嵌套路由和导航守卫</li>
          <li><strong>Vite:</strong> 快速的构建工具，支持热模块替换</li>
        </ul>
      </div>

      <div class="section">
        <h3>📁 项目结构</h3>
        <div class="structure">
          <pre><code>src/
├── components/     # 可复用组件
├── views/         # 页面组件
├── stores/        # Pinia 状态管理
├── router/        # 路由配置
├── assets/        # 静态资源
├── App.vue        # 根组件
└── main.ts        # 应用入口</code></pre>
        </div>
      </div>

      <div class="section">
        <h3>🚀 快速开始</h3>
        <div class="commands">
          <div class="command">
            <span class="command-label">安装依赖:</span>
            <code>npm install</code>
          </div>
          <div class="command">
            <span class="command-label">启动开发服务器:</span>
            <code>npm run dev</code>
          </div>
          <div class="command">
            <span class="command-label">构建生产版本:</span>
            <code>npm run build</code>
          </div>
          <div class="command">
            <span class="command-label">类型检查:</span>
            <code>npm run type-check</code>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>📚 学习资源</h3>
        <div class="resources">
          <a href="https://vuejs.org/" target="_blank" class="resource-link">
            Vue.js 官方文档
          </a>
          <a href="https://pinia.vuejs.org/" target="_blank" class="resource-link">
            Pinia 状态管理
          </a>
          <a href="https://router.vuejs.org/" target="_blank" class="resource-link">
            Vue Router 路由
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" class="resource-link">
            TypeScript 官方文档
          </a>
          <a href="https://vitejs.dev/" target="_blank" class="resource-link">
            Vite 构建工具
          </a>
        </div>
      </div>

      <div class="section">
        <h3>✨ 功能演示</h3>
        <div class="demo-features">
          <div class="demo-item">
            <h4>计数器</h4>
            <p>演示 Pinia 状态管理的基本用法，包括状态、计算属性和操作方法</p>
          </div>
          <div class="demo-item">
            <h4>待办事项</h4>
            <p>展示复杂状态管理场景，包括 CRUD 操作、过滤和统计功能</p>
          </div>
          <div class="demo-item">
            <h4>路由导航</h4>
            <p>使用 Vue Router 实现页面间的无缝切换和导航</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('关于页面已加载')
})
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
  font-size: 2rem;
}

.about-content {
  text-align: left;
}

.section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.section h3 {
  margin-bottom: 1rem;
  color: #1e40af;
  font-size: 1.3rem;
}

.section p {
  color: #4b5563;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  color: #4b5563;
  line-height: 1.6;
}

.feature-list strong {
  color: #1f2937;
}

.structure {
  background: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.structure pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.commands {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.command {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.command-label {
  font-weight: 600;
  color: #374151;
  min-width: 120px;
}

.command code {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.resource-link {
  display: block;
  padding: 1rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  color: #3b82f6;
  font-weight: 500;
  transition: all 0.3s ease;
}

.resource-link:hover {
  border-color: #3b82f6;
  background: #eff6ff;
  transform: translateY(-2px);
}

.demo-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.demo-item {
  padding: 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.demo-item h4 {
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.demo-item p {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }
  
  .command {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .command-label {
    min-width: auto;
  }
}
</style>

