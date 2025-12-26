<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@olinc/common-ui';
import { LOGIN_PATH } from '@olinc/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
