<script lang="ts" setup>
import { useOlincModal, OlincButton } from '@olinc/common-ui';

const [Modal, modalApi] = useOlincModal();
</script>
<template>
  <div>
    <OlincButton @click="() => modalApi.open()">Open</OlincButton>
    <Modal class="w-[600px]" title="基础示例"> modal content </Modal>
  </div>
</template>
