import type { RouteRecordRaw } from 'vue-router';

import {
  OLINC_ANT_PREVIEW_URL,
  OLINC_DOC_URL,
  OLINC_ELE_PREVIEW_URL,
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
        path: '/olinc-adminn/document',
        component: IFrameView,
        meta: {
          icon: 'lucide:book-open-text',
          link: OLINC_DOC_URL,
          title: $t('demos.olinc.document'),
        },
      },
      {
        name: 'OlincGithub',
        path: '/olinc-adminn/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: OLINC_GITHUB_URL,
          title: 'Github',
        },
      },
      {
        name: 'OlincAntdv',
        path: '/olinc-adminn/antdv',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: SvgAntdvLogoIcon,
          link: OLINC_ANT_PREVIEW_URL,
          title: $t('demos.olinc.antdv'),
        },
      },
      {
        name: 'OlincNaive',
        path: '/olinc-adminn/naive',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:naiveui',
          link: OLINC_NAIVE_PREVIEW_URL,
          title: $t('demos.olinc.naive-ui'),
        },
      },
      {
        name: 'OlincElementPlus',
        path: '/olinc-adminn/ele',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:element',
          link: OLINC_ELE_PREVIEW_URL,
          title: $t('demos.olinc.element-plus'),
        },
      },
      {
        name: 'OlincTDesign',
        path: '/olinc-adminn/tdesign',
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
    component: () => import('@/views/_core/about/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      order: 9999,
      title: $t('demos.olinc.about'),
    },
    name: 'OlincAbout',
    path: '/olinc-adminn/about',
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
