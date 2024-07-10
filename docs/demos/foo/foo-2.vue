<template>
  <rth-foo :msg="msg"></rth-foo>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello custom component')
</script>
