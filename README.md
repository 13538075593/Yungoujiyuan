# Vue 3.5 + Pinia + TypeScript + Vue Router Demo

这是一个完整的 Vue 3.5 演示项目，展示了如何使用现代前端技术栈构建应用程序。

## 🚀 技术栈

- **Vue 3.5** - 渐进式 JavaScript 框架
- **Pinia** - 现代化状态管理库
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vue Router** - 官方路由管理器
- **Vite** - 快速的构建工具

## 📁 项目结构

```
src/
├── components/     # 可复用组件
├── views/         # 页面组件
│   ├── Home.vue      # 首页
│   ├── Counter.vue   # 计数器演示
│   ├── Todos.vue     # 待办事项演示
│   └── About.vue     # 关于页面
├── stores/        # Pinia 状态管理
│   ├── counter.ts    # 计数器状态
│   └── todos.ts      # 待办事项状态
├── router/        # 路由配置
│   └── index.ts      # 路由定义
├── App.vue        # 根组件
├── main.ts        # 应用入口
└── style.css      # 全局样式
```

## 🛠️ 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 类型检查

```bash
npm run type-check
```

## ✨ 功能演示

### 1. 首页 (Home)
- 项目介绍和技术栈展示
- 现代化 UI 设计

### 2. 计数器 (Counter)
- Pinia 状态管理基础用法
- 响应式状态更新
- 计算属性和操作方法
- 操作历史记录

### 3. 待办事项 (Todos)
- 复杂的状态管理场景
- CRUD 操作（创建、读取、更新、删除）
- 过滤功能（全部、未完成、已完成）
- 统计信息
- 模态框编辑

### 4. 关于页面 (About)
- 项目详细说明
- 学习资源链接
- 快速开始指南

## 🎯 学习要点

### Vue 3.5 特性
- Composition API
- 响应式系统
- 单文件组件 (SFC)

### Pinia 状态管理
- Store 定义
- State、Getters、Actions
- TypeScript 类型支持

### Vue Router
- 路由配置
- 导航组件
- 编程式导航

### TypeScript 集成
- 类型定义
- 接口声明
- 类型安全的组件开发

## 📚 学习资源

- [Vue.js 官方文档](https://vuejs.org/)
- [Pinia 状态管理](https://pinia.vuejs.org/)
- [Vue Router 路由](https://router.vuejs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Vite 构建工具](https://vitejs.dev/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个演示项目！

## 📄 许可证

MIT License
