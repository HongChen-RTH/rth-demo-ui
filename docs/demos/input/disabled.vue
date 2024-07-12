<script setup>
import { ref } from 'vue'

const test = ref('')
</script>
<template>
  <div >
  <rth-input style="width: 200  px;height: 50px;" v-model="test" placeholder="基础文本框，请输入" />
  <span>{{test}}</span>
</div>
</template>