<template>
  <div class="todos">
    <h2>待办事项演示</h2>
    <p>这个页面演示了 Pinia 状态管理在复杂场景中的应用</p>
    
    <div class="todo-input">
      <input 
        v-model="newTodoText" 
        @keyup.enter="addTodo"
        placeholder="输入新的待办事项..."
        class="todo-input-field"
      >
      <button @click="addTodo" class="btn btn-primary">
        添加
      </button>
    </div>

    <div class="filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        @click="todosStore.setFilter(filter.value)"
        class="filter-btn"
        :class="{ active: todosStore.filter === filter.value }"
      >
        {{ filter.label }} ({{ filter.count }})
      </button>
    </div>

    <div class="todo-list">
      <div 
        v-for="todo in todosStore.filteredTodos" 
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="todosStore.toggleTodo(todo.id)"
          class="todo-checkbox"
        >
        <span class="todo-text">{{ todo.text }}</span>
        <div class="todo-actions">
          <button @click="editTodo(todo)" class="btn btn-sm btn-secondary">
            编辑
          </button>
          <button @click="todosStore.deleteTodo(todo.id)" class="btn btn-sm btn-danger">
            删除
          </button>
        </div>
      </div>
      
      <div v-if="todosStore.filteredTodos.length === 0" class="empty-state">
        <p>暂无待办事项</p>
      </div>
    </div>

    <div class="todo-stats">
      <div class="stat-item">
        <span class="stat-label">总计:</span>
        <span class="stat-value">{{ todosStore.todosCount }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">已完成:</span>
        <span class="stat-value">{{ todosStore.completedCount }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">未完成:</span>
        <span class="stat-value">{{ todosStore.activeTodos.length }}</span>
      </div>
      <button 
        v-if="todosStore.completedCount > 0"
        @click="todosStore.clearCompleted"
        class="btn btn-warning"
      >
        清除已完成
      </button>
    </div>

    <!-- 编辑模态框 -->
    <div v-if="editingTodo" class="modal-overlay" @click="cancelEdit">
      <div class="modal" @click.stop>
        <h3>编辑待办事项</h3>
        <input 
          v-model="editingText" 
          @keyup.enter="saveEdit"
          class="todo-input-field"
        >
        <div class="modal-actions">
          <button @click="saveEdit" class="btn btn-primary">保存</button>
          <button @click="cancelEdit" class="btn btn-secondary">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodosStore, type Todo } from '../stores/todos'

const todosStore = useTodosStore()
const newTodoText = ref('')
const editingTodo = ref<Todo | null>(null)
const editingText = ref('')

const filters = computed(() => [
  { value: 'all', label: '全部', count: todosStore.todosCount },
  { value: 'active', label: '未完成', count: todosStore.activeTodos.length },
  { value: 'completed', label: '已完成', count: todosStore.completedCount }
])

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todosStore.addTodo(newTodoText.value.trim())
    newTodoText.value = ''
  }
}

const editTodo = (todo: Todo) => {
  editingTodo.value = todo
  editingText.value = todo.text
}

const saveEdit = () => {
  if (editingTodo.value && editingText.value.trim()) {
    todosStore.editTodo(editingTodo.value.id, editingText.value.trim())
    cancelEdit()
  }
}

const cancelEdit = () => {
  editingTodo.value = null
  editingText.value = ''
}
</script>

<style scoped>
.todos {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
}

.todos h2 {
  margin-bottom: 0.5rem;
  color: #333;
}

.todo-input {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

.todo-input-field {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
}

.todo-input-field:focus {
  outline: none;
  border-color: #3b82f6;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: #f3f4f6;
}

.filter-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.todo-list {
  margin: 2rem 0;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.todo-item.completed {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #6b7280;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 1rem;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.btn-warning {
  background: #f59e0b;
  color: white;
}

.btn-warning:hover {
  background: #d97706;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.todo-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-label {
  color: #6b7280;
  font-weight: 500;
}

.stat-value {
  font-weight: bold;
  color: #1f2937;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
}

.modal h3 {
  margin-bottom: 1rem;
  color: #1f2937;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
}
</style>

