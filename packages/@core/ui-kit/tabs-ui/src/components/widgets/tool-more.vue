<script lang="ts" setup>
import type { DropdownMenuProps } from '@olinc-core/shadcn-ui';

import { ChevronDown } from '@olinc-core/icons';
import { OlincDropdownMenu } from '@olinc-core/shadcn-ui';

defineProps<DropdownMenuProps>();
</script>

<template>
  <OlincDropdownMenu :menus="menus" :modal="false">
    <div
      class="flex-center h-full cursor-pointer border-l border-border px-2 text-lg font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      <ChevronDown class="size-4" />
    </div>
  </OlincDropdownMenu>
</template>
