<template>
  <a :href="href" :class="['link', { 'is-active': isActive }]">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageContext } from 'vike-lite-vue'

const props = defineProps<{
  href: string
}>()

const pageContext = usePageContext()

const isActive = computed(() =>
  props.href === '/'
    ? pageContext.urlPathname === props.href
    : pageContext.urlPathname.startsWith(props.href)
)
</script>
