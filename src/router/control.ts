//  总控
const routes = [
  {
    path: '/control/site',
    name: 'controlSite',
    meta: {
      title: '站点管理',
    },
    component: () => import('@/views/Control/Site/index.vue')
  }
];


export default routes;