<script lang="ts" setup>
import { useOlincDrawer, OlincButton } from '@olinc/common-ui';

import ExtraDrawer from './drawer.vue';

const [Drawer, drawerApi] = useOlincDrawer({
  // 连接抽离的组件
  connectedComponent: ExtraDrawer,
});

function open() {
  drawerApi.open();
}
</script>

<template>
  <div>
    <Drawer />
    <OlincButton @click="open">Open</OlincButton>
  </div>
</template>
