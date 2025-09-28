import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
    filter: 'all' as 'all' | 'active' | 'completed'
  }),

  getters: {
    filteredTodos: (state) => {
      switch (state.filter) {
        case 'active':
          return state.todos.filter(todo => !todo.completed)
        case 'completed':
          return state.todos.filter(todo => todo.completed)
        default:
          return state.todos
      }
    },
    
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    
    activeTodos: (state) => state.todos.filter(todo => !todo.completed),
    
    todosCount: (state) => state.todos.length,
    
    completedCount: (state) => state.todos.filter(todo => todo.completed).length
  },

  actions: {
    addTodo(text: string) {
      const todo: Todo = {
        id: this.nextId++,
        text,
        completed: false,
        createdAt: new Date()
      }
      this.todos.push(todo)
    },
    
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    deleteTodo(id: number) {
      const index = this.todos.findIndex(todo => todo.id === id)
      if (index > -1) {
        this.todos.splice(index, 1)
      }
    },
    
    editTodo(id: number, text: string) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.text = text
      }
    },
    
    setFilter(filter: 'all' | 'active' | 'completed') {
      this.filter = filter
    },
    
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
})

