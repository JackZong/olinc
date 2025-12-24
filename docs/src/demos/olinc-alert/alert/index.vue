<script lang="ts" setup>
import { h } from 'vue';

import { alert, OlincButton } from '@olinc/common-ui';
import { Result } from 'ant-design-vue';

function showAlert() {
  alert('This is an alert message');
}

function showIconAlert() {
  alert({
    content: 'This is an alert message with icon',
    icon: 'success',
  });
}

function showCustomAlert() {
  alert({
    buttonAlign: 'center',
    content: h(Result, {
      status: 'success',
      subTitle: '已成功创建订单。订单ID：2017182818828182881',
      title: '操作成功',
    }),
  });
}
</script>
<template>
  <div class="flex gap-4">
    <OlincButton @click="showAlert">Alert</OlincButton>
    <OlincButton @click="showIconAlert">Alert With Icon</OlincButton>
    <OlincButton @click="showCustomAlert">Alert With Custom Content</OlincButton>
  </div>
</template>
