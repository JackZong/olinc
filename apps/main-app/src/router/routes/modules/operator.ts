import type { RouteRecordRaw } from 'vue-router';

import { MicroAppView } from '@olinc/layouts';

import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('operator.title'),
      isMicroApp: true,
    },
    name: 'Operator',
    path: '/operator',
    children: [
      {
        meta: {
          title: $t('operator.title'),
        },
        name: 'OperatorDashboard',
        path: 'workspace',
        component: MicroAppView,
      },
    ],
  },
];

export default routes;
