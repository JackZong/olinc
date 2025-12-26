import type { RouteRecordRaw } from 'vue-router';

import {
  OLINC_ANT_PREVIEW_URL,
  OLINC_DOC_URL,
  OLINC_GITHUB_URL,
  OLINC_LOGO_URL,
  OLINC_NAIVE_PREVIEW_URL,
  OLINC_TD_PREVIEW_URL,
} from '@olinc/constants';
import { SvgAntdvLogoIcon, SvgTDesignIcon } from '@olinc/icons';

import { IFrameView } from '@/layouts';
import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      badgeType: 'dot',
      icon: OLINC_LOGO_URL,
      order: 9998,
      title: $t('demos.olinc.title'),
    },
    name: 'OlincProject',
    path: '/olinc-admin',
    children: [
      {
        name: 'OlincDocument',
        path: '/olinc-admin/document',
        component: IFrameView,
        meta: {
          icon: 'lucide:book-open-text',
          link: OLINC_DOC_URL,
          title: $t('demos.olinc.document'),
        },
      },
      {
        name: 'OlincGithub',
        path: '/olinc-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: OLINC_GITHUB_URL,
          title: 'Github',
        },
      },
      {
        name: 'OlincNaive',
        path: '/olinc-admin/naive',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:naiveui',
          link: OLINC_NAIVE_PREVIEW_URL,
          title: $t('demos.olinc.naive-ui'),
        },
      },
      {
        name: 'OlincAntd',
        path: '/olinc-admin/antd',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: SvgAntdvLogoIcon,
          link: OLINC_ANT_PREVIEW_URL,
          title: $t('demos.olinc.antdv'),
        },
      },
      {
        name: 'OlincTDesign',
        path: '/olinc-admin/tdesign',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: SvgTDesignIcon,
          link: OLINC_TD_PREVIEW_URL,
          title: $t('demos.olinc.tdesign'),
        },
      },
    ],
  },
  {
    name: 'OlincAbout',
    path: '/olinc-admin/about',
    component: () => import('@/views/_core/about/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      title: $t('demos.olinc.about'),
      order: 9999,
    },
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/_core/profile/index.vue'),
    meta: {
      icon: 'lucide:user',
      hideInMenu: true,
      title: $t('page.auth.profile'),
    },
  },
];

export default routes;
