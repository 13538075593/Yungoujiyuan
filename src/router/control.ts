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
    path: '/control/menu',
    name: 'controlMenu',
    meta: {
      title: i18n.global.t('routes.control.controlMenu'),
    },
    component: () => import('@/views/Control/Menu/index.vue')
  },
  {
    path: '/control/role',
    name: 'controlRole',
    meta: {
      title: i18n.global.t('routes.control.controlRole'),
    },
    component: () => import('@/views/Control/Role/index.vue')
  },
  {
    path: '/control/user',
    name: 'controlUser',
    meta: {
      title: i18n.global.t('routes.control.controlUser'),
    },
    component: () => import('@/views/Control/User/index.vue')
  },
  {
    path: '/control/log',
    name: 'controlLog',
    meta: {
      title: i18n.global.t('routes.control.controlLog'),
    },
    component: () => import('@/views/Control/Log/index.vue')
  },
  {
    path: '/control/venue',
    name: 'controlVenue',
    meta: {
      title: i18n.global.t('routes.control.controlVenue'),
    },
    component: () => import('@/views/Control/Venue/index.vue')
  },
];


export default routes;