//  会员
import i18n from '../locales/index';

const routes = [
  {
    path: '/vip/list',
    name: 'vipList',
    meta: {
      title: i18n.global.t('routes.vip.vipList'),
    },
    component: () => import('@/views/Todos.vue')
  }
];


export default routes;