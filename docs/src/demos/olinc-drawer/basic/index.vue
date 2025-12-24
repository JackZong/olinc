<script lang="ts" setup>
import { useOlincDrawer, OlincButton } from '@olinc/common-ui';

const [Drawer, drawerApi] = useOlincDrawer();
</script>
<template>
  <div>
    <OlincButton @click="() => drawerApi.open()">Open</OlincButton>
    <Drawer class="w-[600px]" title="基础示例"> drawer content </Drawer>
  </div>
</template>
