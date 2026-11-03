<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const frameworkId = Number(route.params.id)

const versionsByFramework = ref({
  1: ['3.5.0', '3.4.1', '3.3.0'],
  2: ['19.0.0', '18.2.0', '18.1.0'],
  3: ['17.0.0', '16.0.0', '15.0.0']
})

const frameworkVersions = computed(() => versionsByFramework.value[frameworkId] || [])
</script>

<template>
  <div>
    <h3>Versions</h3>
    <ul v-if="frameworkVersions.length">
      <li v-for="version in frameworkVersions" :key="version">{{ version }}</li>
    </ul>
    <p v-else>No hi ha versions disponibles.</p>
  </div>
</template>
