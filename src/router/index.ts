import { createRouter, createWebHistory } from 'vue-router'

import vip from './vip';
import control from './control';

const asyncRoutes = [
  ...vip,
  ...control,
];

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home.vue')
      },
      ...asyncRoutes
    ]
  },
  {
    path: '/',
    children: [
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录',
        },
        component: () => import('@/views/Login/index.vue')
      }
    ]
  },
];



console.log(asyncRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const pathExists = router.getRoutes().some(({ path }) => path === to.path);
  console.log(pathExists);
  if (pathExists) {
    next();
  } else {
    const dynamicRoute = asyncRoutes.find(i => i.path === to.path);
    if (dynamicRoute) {
      router.addRoute(dynamicRoute);
      next();
    }
  }
});

export default router

