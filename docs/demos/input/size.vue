<docs>
---
title: 输入框尺寸
---

这是一个`input`输入框尺寸的使用例子
</docs>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
    <div class="size">
        <rth-input v-model="value" size="large" />
        <rth-input v-model="value" />
        <rth-input v-model="value" size="small" />
    </div>
</template>
<style scoped>
.size {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.rth-input {
  margin-top: 1em;
}
</style>
