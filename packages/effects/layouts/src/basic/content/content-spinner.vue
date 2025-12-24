<script lang="ts" setup>
import { OlincSpinner } from '@olinc-core/shadcn-ui';

import { useContentSpinner } from './use-content-spinner';

defineOptions({ name: 'LayoutContentSpinner' });

const { spinning } = useContentSpinner();
</script>
<template>
  <OlincSpinner :spinning="spinning" />
</template>
