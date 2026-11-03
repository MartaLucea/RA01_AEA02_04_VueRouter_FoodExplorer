<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const frameworkId = Number(route.params.id)

const frameworks = ref([
  { id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
  { id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
  { id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])

const framework = frameworks.value.find(f => f.id === frameworkId)
</script>

<template>
  <div v-if="framework">
    <h1>{{ framework.name }}</h1>
    <p>{{ framework.desc }}</p>

    <RouterLink :to="`/frameworks/${framework.id}/versions`">📦 Versions</RouterLink>
  </div>
  <p v-else>No s'ha trobat el framework.</p>

    <RouterView :key="$route.fullPath"/>
</template>