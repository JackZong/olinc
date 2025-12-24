<script setup lang="ts">
import type { Recordable } from '@olinc/types';

import type { OlincFormSchema } from '@olinc-core/form-ui';

import { computed, reactive } from 'vue';

import { useOlincForm } from '@olinc-core/form-ui';
import { OlincButton } from '@olinc-core/shadcn-ui';

interface Props {
  formSchema?: OlincFormSchema[];
}

const props = withDefaults(defineProps<Props>(), {
  formSchema: () => [],
});

const emit = defineEmits<{
  submit: [Recordable<any>];
}>();

const [Form, formApi] = useOlincForm(
  reactive({
    commonConfig: {
      // 所有表单项
      componentProps: {
        class: 'w-full',
      },
    },
    layout: 'horizontal',
    schema: computed(() => props.formSchema),
    showDefaultActions: false,
  }),
);

async function handleSubmit() {
  const { valid } = await formApi.validate();
  const values = await formApi.getValues();
  if (valid) {
    emit('submit', values);
  }
}

defineExpose({
  getFormApi: () => formApi,
});
</script>
<template>
  <div>
    <Form />
    <OlincButton type="submit" class="mt-4" @click="handleSubmit">
      更新密码
    </OlincButton>
  </div>
</template>
