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

function handleUpdateTitle() {
  modalApi.setState({ title: '外部动态标题' }).open();
}
</script>

<template>
  <div>
    <Modal />

    <OlincButton @click="openModal">Open</OlincButton>
    <OlincButton class="ml-2" type="primary" @click="handleUpdateTitle">
      从外部修改标题并打开
    </OlincButton>
  </div>
</template>
