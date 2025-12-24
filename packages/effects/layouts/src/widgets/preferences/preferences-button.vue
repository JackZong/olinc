<script lang="ts" setup>
import { OlincIconButton } from '@olinc-core/shadcn-ui';

import { Settings } from '@olinc/icons';

import Preferences from './preferences.vue';

const emit = defineEmits<{ clearPreferencesAndLogout: [] }>();

function clearPreferencesAndLogout() {
  emit('clearPreferencesAndLogout');
}
</script>
<template>
  <Preferences @clear-preferences-and-logout="clearPreferencesAndLogout">
    <OlincIconButton class="hover:animate-[shrink_0.3s_ease-in-out]">
      <Settings class="text-foreground size-4" />
    </OlincIconButton>
  </Preferences>
</template>
