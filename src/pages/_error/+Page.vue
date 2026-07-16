<template>
  <template v-if="is404">
    <h1>404 Page Not Found</h1>
    <p>This page could not be found.</p>
  </template>

  <template v-else>
    <h1>500 Internal Server Error</h1>
    <p>Something went wrong.</p>
  </template>
</template>

<script setup lang="ts">
import { usePageContext } from 'vike-lite-vue'
const { is404 } = usePageContext()
</script>
