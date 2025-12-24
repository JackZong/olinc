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

function handleUpdateTitle() {
  drawerApi.setState({ title: '外部动态标题' }).open();
}
</script>

<template>
  <div>
    <Drawer />

    <OlincButton @click="open">Open</OlincButton>
    <OlincButton class="ml-2" type="primary" @click="handleUpdateTitle">
      从外部修改标题并打开
    </OlincButton>
  </div>
</template>
