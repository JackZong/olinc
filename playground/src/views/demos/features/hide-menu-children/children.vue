<script lang="ts" setup>
import { Fallback, OlincButton } from '@olinc/common-ui';
import { useTabs } from '@olinc/hooks';
import { X } from '@olinc/icons';

const { closeCurrentTab } = useTabs();
</script>

<template>
  <Fallback
    description="当前路由在菜单中不可见"
    status="coming-soon"
    title="被隐藏的子菜单"
    show-back
  >
    <template #action>
      <OlincButton size="lg" @click="closeCurrentTab()">
        <X class="mr-2 size-4" />
        关闭当前标签页
      </OlincButton>
    </template>
  </Fallback>
</template>
