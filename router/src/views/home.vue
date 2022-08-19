<script setup lang="ts">
import { info } from '@/api/user';

const userInfo = await info();
</script>

<template>
  {{ userInfo.result }}
  <h1 class="bg-red-800">Home</h1>
</template>

<style></style>