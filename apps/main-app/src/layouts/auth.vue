<script lang="ts" setup>
import { computed } from 'vue';

import { AuthPageLayout } from '@olinc/layouts';
import { preferences } from '@olinc/preferences';

import { $t } from '@/locales';

const appName = computed(() => `${preferences.app.name}主应用`);
const logo = computed(() => preferences.logo.source);
const logoDark = computed(() => preferences.logo.sourceDark);
</script>

<template>
  <AuthPageLayout
    :app-name="appName"
    :logo="logo"
    :logo-dark="logoDark"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
