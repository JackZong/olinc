<script lang="ts" setup>
import { OlincCountToAnimator } from '@olinc/common-ui';
</script>
<template>
  <OlincCountToAnimator
    :duration="3000"
    :end-val="2000000"
    :start-val="1"
    prefix="$"
    separator="/"
  />
</template>
