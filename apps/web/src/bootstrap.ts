import { createApp, watchEffect } from 'vue';

import { registerAccessDirective } from '@olinc/access';
import { registerLoadingDirective, setupFleetUI } from '@olinc/common-ui';
import { preferences } from '@olinc/preferences';
import { initStores } from '@olinc/stores';
import { useTitle } from '@vueuse/core';
import { ElLoading } from 'element-plus';

import { $t, setupI18n } from '@/locales';

import { initComponentAdapter } from './adapter/component';
import { initSetupOlincForm } from './adapter/form';
import App from './app.vue';
import { router } from './router';
import { requestClient } from '@/api/request';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@olinc/styles';
import '@olinc/styles/ele';

async function bootstrap(namespace: string) {
  // 初始化组件适配器
  await initComponentAdapter();

  // 初始化表单组件
  await initSetupOlincForm();

  // // 设置弹窗的默认配置
  // setDefaultModalProps({
  //   fullscreenButton: false,
  // });
  // // 设置抽屉的默认配置
  // setDefaultDrawerProps({
  //   zIndex: 2000,
  // });
  const app = createApp(App);

  // 初始化 FleetUI 组件库
  setupFleetUI(app, requestClient);

  // 注册Element Plus提供的v-loading指令
  app.directive('loading', ElLoading.directive);

  // 注册Olinc提供的v-loading和v-spinning指令
  registerLoadingDirective(app, {
    loading: false, // Olinc提供的v-loading指令和Element Plus提供的v-loading指令二选一即可，此处false表示不注册Olinc提供的v-loading指令
    spinning: 'spinning',
  });

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 安装权限指令
  registerAccessDirective(app);

  // 初始化 tippy
  const { initTippy } = await import('@olinc/common-ui/es/tippy');
  initTippy(app);

  // 配置路由及路由守卫
  app.use(router);

  // 配置Motion插件
  const { MotionPlugin } = await import('@olinc/plugins/motion');
  app.use(MotionPlugin);

  // 动态更新标题
  watchEffect(() => {
    if (preferences.app.dynamicTitle) {
      const routeTitle = router.currentRoute.value.meta?.title;
      const pageTitle =
        (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name;
      useTitle(pageTitle);
    }
  });

  app.use(ElementPlus);

  app.mount('#app');
}

export { bootstrap };
