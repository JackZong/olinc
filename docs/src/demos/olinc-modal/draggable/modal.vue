<script lang="ts" setup>
import { useOlincModal } from '@olinc/common-ui';

const [Modal] = useOlincModal({
  draggable: true,
});
</script>
<template>
  <Modal title="拖拽示例"> modal content </Modal>
</template>
