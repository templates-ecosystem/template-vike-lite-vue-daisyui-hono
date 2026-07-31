<template>
  <input type="checkbox" class="checkbox" v-model="isChecked" />

  <br />

  The checkbox is: {{ isChecked ? 'checked' : 'unchecked' }}
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const isChecked = ref(true)
</script>
