<script setup>
import { ref } from 'vue';

const receptes = ref([
  {
    id: 1,
    nom: "Pasta Carbonara",
    descripcio: "Un dels clàssics italians més cremosos.",
    imatge: "https://example.com/images/carbonara.jpg",
  },
  {
    id: 2,
    nom: "Paella de Marisc",
    descripcio: "Plat tradicional amb tot el gust del mar.",
    imatge: "https://example.com/images/paella.jpg",
  },
  {
    id: 3,
    nom: "Amanida Caprese",
    descripcio: "Una opció fresca i lleugera típica de la Itàlia mediterrània.",
    imatge: "https://example.com/images/caprese.jpg",
  }
]);

</script>
<template>
    <div>
        <h2>Llista de Receptes</h2>
        <ul>
            <li v-for="recepta in receptes" :key="recepta.nom">
              <RouterLink :to="`/receptes/${recepta.id}`">{{ recepta.nom }}</RouterLink>
            </li>
        </ul>
    </div>
</template>