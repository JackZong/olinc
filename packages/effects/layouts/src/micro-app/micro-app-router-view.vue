<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router';

import type { MicroApp } from '@olinc/types';

import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import microApp from '@micro-zoe/micro-app';
import { preferences } from '@olinc/preferences';
import { useTabbarStore } from '@olinc/stores';

interface Props {
  activeApp?: MicroApp | null;
}

defineOptions({ name: 'MicroAppRouterView' });

const props = withDefaults(defineProps<Props>(), {
  activeApp: null,
});

console.log('micro app aaa:', props.activeApp);

const spinningList = ref<boolean[]>([]);
const tabbarStore = useTabbarStore();
const route = useRoute();

const enableTabbar = computed(() => preferences.tabbar.enable);

const iframeRoutes = computed(() => {
  if (!enableTabbar.value) {
    return route.meta.iframeSrc ? [route] : [];
  }
  return tabbarStore.getTabs.filter((tab) => !!tab.meta?.iframeSrc);
});

const tabNames = computed(
  () => new Set(iframeRoutes.value.map((item) => item.name as string)),
);

const showIframe = computed(() => iframeRoutes.value.length > 0);

function routeShow(tabItem: RouteLocationNormalized) {
  return tabItem.name === route.name;
}

function canRender(tabItem: RouteLocationNormalized) {
  const { meta, name } = tabItem;

  if (!name || !tabbarStore.renderRouteView) {
    return false;
  }

  if (!enableTabbar.value) {
    return routeShow(tabItem);
  }

  // 跟随 keepAlive 状态,与其他tab页保持一致
  if (
    !meta?.keepAlive &&
    tabNames.value.has(name as string) &&
    name !== route.name
  ) {
    return false;
  }
  return tabbarStore.getTabs.some((tab) => tab.name === name);
}

function hideLoading(index: number) {
  spinningList.value[index] = false;
}

function showSpinning(index: number) {
  const curSpinning = spinningList.value[index];
  // 首次加载时显示loading
  return curSpinning === undefined ? true : curSpinning;
}

const router = useRouter();
// const route = useRoute();
const microData = computed(() => ({
  user: { name: '张三', age: 18 },
  path: route.path,
  router, // 下发router对象，用于子应用控制主应用跳转
}));
// function handleMounted() {
//   hideLoading(0);
//   if (props.activeApp) {
//     microApp.setData(props.activeApp.name, {
//       ...toRaw(microData.value),
//     });
//   }
// }
</script>
<template>
  <div>
    <OlincSpinner :spinning="showSpinning(0)" />
    <micro-app
      v-if="activeApp"
      :name="activeApp.name"
      :url="activeApp.url"
      :baseroute="activeApp.baseroute"
      :data="microData"
      clear-data
      @created="showSpinning(0)"
      @mounted="hideLoading(0)"
      iframe
    />
  </div>
</template>
