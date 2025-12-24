<script lang="ts" setup>
import { useOlincModal, OlincButton } from '@olinc/common-ui';

import ExtraModal from './modal.vue';

const [Modal, modalApi] = useOlincModal({
  // 连接抽离的组件
  connectedComponent: ExtraModal,
});

function openModal() {
  modalApi.open();
}
</script>

<template>
  <div>
    <Modal />
    <OlincButton @click="openModal">Open</OlincButton>
  </div>
</template>
