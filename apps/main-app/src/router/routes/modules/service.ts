import type { RouteRecordRaw } from 'vue-router';

import { MicroAppView } from '@olinc/layouts';

import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('service.title'),
      isMicroApp: true,
    },
    name: 'Service',
    path: '/nebula',
    children: [
      {
        meta: {
          title: 'Nebula 工作台',
        },
        name: 'NebulaDashboard',
        path: 'workspace',
        component: MicroAppView,
      },
    ],
  },
];

export default routes;
