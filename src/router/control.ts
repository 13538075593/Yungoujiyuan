//  总控
import i18n from '../locales/index';
const routes = [
  {
    path: '/control/site',
    name: 'controlSite',
    meta: {
      title: i18n.global.t('routes.control.controlSite'),
    },
    component: () => import('@/views/Control/Site/index.vue')
  },
  {
    path: '/control/role',
    name: 'controlRole',
    meta: {
      title: i18n.global.t('routes.control.controlRole'),
    },
    component: () => import('@/views/Control/Role/index.vue')
  }
];


export default routes;