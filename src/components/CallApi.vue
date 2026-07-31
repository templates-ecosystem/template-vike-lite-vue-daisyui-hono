<script setup lang="ts">
import { ref } from 'vue'
import { apiCall } from './utils/fetch'

const userId = ref<string>()
const username = ref<string>()
const updatedUserId = ref<string>()
const updatedUsername = ref<string>()
</script>

<template>
  <button
    class="btn btn-md"
    @click="async () => {
      const { id, name } = await apiCall('/api/userRetrieve')
      username = name
      userId = id
    }"
  >
    Click to call API /userRetrieve and show result
  </button>

  <ul v-show="userId" class="list">
    <li class="list-row">User ID: {{ userId }}</li>
    <li class="list-row">User name: {{ username }}</li>
  </ul>

  <div class="divider divider-neutral"></div>

  <button
    class="btn btn-md"
    @click="async () => {
      const { id, name } = await apiCall('/api/userUpdate', { id: 'updated-1', name: 'updated-newUsername' })
      updatedUsername = name
      updatedUserId = id
    }"
  >
    Click to call API /userUpdate and show result
  </button>

  <ul v-show="updatedUserId" class="list">
    <li class="list-row">User ID: {{ updatedUserId }}</li>
    <li class="list-row">User name: {{ updatedUsername }}</li>
  </ul>
</template>
