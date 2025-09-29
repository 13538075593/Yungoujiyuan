//  会员
const routes = [
  {
    path: '/vip/list',
    name: 'vipList',
    meta: {
      title: '会员信息',
    },
    component: () => import('@/views/Todos.vue')
  }
];


export default routes;