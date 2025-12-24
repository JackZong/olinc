<script setup lang="ts">
import type { SupportedLanguagesType } from '@olinc/locales';

import { OlincDropdownRadioMenu, OlincIconButton } from '@olinc-core/shadcn-ui';

import { SUPPORT_LANGUAGES } from '@olinc/constants';
import { Languages } from '@olinc/icons';
import { loadLocaleMessages } from '@olinc/locales';
import { preferences, updatePreferences } from '@olinc/preferences';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string | undefined) {
  if (!value) return;
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <OlincDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <OlincIconButton class="hover:animate-[shrink_0.3s_ease-in-out]">
        <Languages class="text-foreground size-4" />
      </OlincIconButton>
    </OlincDropdownRadioMenu>
  </div>
</template>
