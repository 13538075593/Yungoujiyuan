<template>
  <div class="counter">
    <h2>计数器演示</h2>
    <p>这个页面演示了 Pinia 状态管理的基本用法</p>
    
    <div class="counter-display">
      <div class="count-value" :class="{ even: counterStore.isEven }">
        {{ counterStore.count }}
      </div>
      <p class="count-info">
        双倍值: {{ counterStore.doubleCount }} | 
        {{ counterStore.isEven ? '偶数' : '奇数' }}
      </p>
    </div>

    <div class="counter-controls">
      <button @click="counterStore.decrement" class="btn btn-danger">
        -1
      </button>
      <button @click="counterStore.increment" class="btn btn-primary">
        +1
      </button>
      <button @click="counterStore.reset" class="btn btn-secondary">
        重置
      </button>
    </div>

    <div class="set-value">
      <input 
        v-model.number="inputValue" 
        type="number" 
        placeholder="设置新值"
        class="input"
      >
      <button @click="setCustomValue" class="btn btn-success">
        设置值
      </button>
    </div>

    <div class="history" v-if="counterStore.history.length > 1">
      <h3>操作历史</h3>
      <div class="history-list">
        <span 
          v-for="(value, index) in counterStore.history" 
          :key="index"
          class="history-item"
          :class="{ current: index === counterStore.history.length - 1 }"
        >
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
const inputValue = ref<number>(0)

const setCustomValue = () => {
  if (inputValue.value !== null) {
    counterStore.setCount(inputValue.value)
    inputValue.value = 0
  }
}
</script>

<style scoped>
.counter {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.counter h2 {
  margin-bottom: 0.5rem;
  color: #333;
}

.counter-display {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
}

.count-value {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.count-value.even {
  color: #4ade80;
  transform: scale(1.1);
}

.count-info {
  font-size: 1.1rem;
  opacity: 0.9;
}

.counter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
  transform: translateY(-2px);
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
  transform: translateY(-2px);
}

.set-value {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.input {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  width: 150px;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
}

.history {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
}

.history h3 {
  margin-bottom: 1rem;
  color: #374151;
}

.history-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.history-item {
  padding: 0.5rem 1rem;
  background: #e5e7eb;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.history-item.current {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}
</style>

