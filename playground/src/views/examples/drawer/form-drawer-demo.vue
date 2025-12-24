<script lang="ts" setup>
import { useOlincDrawer } from '@olinc/common-ui';

import { useOlincForm } from '@/adapter/form';

defineOptions({
  name: 'FormDrawerDemo',
});

const [Form, formApi] = useOlincForm({
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'field1',
      label: '字段1',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'field2',
      label: '字段2',
      rules: 'required',
    },
  ],
  showDefaultActions: false,
});
const [Drawer, drawerApi] = useOlincDrawer({
  onCancel() {
    drawerApi.close();
  },
  onConfirm: async () => {
    await formApi.submitForm();
    drawerApi.close();
  },
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const { values } = drawerApi.getData<Record<string, any>>();
      if (values) {
        formApi.setValues(values);
      }
    }
  },
  title: '内嵌表单示例',
});
</script>
<template>
  <Drawer>
    <Form />
  </Drawer>
</template>
