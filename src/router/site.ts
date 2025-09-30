//  总控
import i18n from '../locales/index';
const routes = [
  {
    path: '/site/configuration',
    name: 'siteConfiguration',
    meta: {
      title: i18n.global.t('routes.site.siteConfiguration'),
    },
    component: () => import('@/views/Control/Site/index.vue')
  },
  
];


export default routes;