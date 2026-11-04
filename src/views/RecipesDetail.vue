<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router' // 1. CORREGIDO: Importar useRouter

const route = useRoute()
const router = useRouter()
const receptaId = Number(route.params.id)

const receptes = ref([
  {
    id: 1,
    nom: "Pasta Carbonara",
    descripcio: "Un dels clàssics italians més cremosos.",
    imatge: "https://example.com/images/carbonara.jpg",
    ingredients: [ "Pasta", "Ou", "Formatge Pecorino", "Pancetta" ],
    pasAPas: [ "Sofregir", "Bullir", "Barrejar", "Emplatar" ]
  },
  {
    id: 2,
    nom: "Paella de Marisc",
    descripcio: "Plat tradicional amb tot el gust del mar.",
    imatge: "https://example.com/images/paella.jpg",
    ingredients: [ "Arròs", "Gambes", "Calamars", "Caldo de peix", "Safrà" ],
    pasAPas: [ "Sofregir el marisc i les verdures", "Afegir l'arròs i torrar-lo lleugerament", "Abocar el caldo i coure a foc mitjà", "Deixar reposar i servir" ]
  },
  {
    id: 3,
    nom: "Amanida Caprese",
    descripcio: "Una opció fresca i lleugera típica de la Itàlia mediterrània.",
    imatge: "https://example.com/images/caprese.jpg",
    ingredients: [ "Tomàquets frescos", "Formatge Mozzarella", "Fulles de alfàbrega", "Oli d'oliva verge extra", "Sal i pebre" ],
    pasAPas: [ "Tallar els tomàquets i la mozzarella a rodanxes", "Alternar les rodanxes en un plat", "Afegir les fulles d'alfàbrega fresca", "Amanir amb oli d'oliva, sal i pebre" ]
  }
]);

const recepta = receptes.value.find(r => r.id === receptaId)

if (!recepta) {
  router.replace({ name: 'notfound' })
}
</script>

<template>
  <div v-if="recepta">
    <img :src="recepta.imatge" :alt="recepta.nom">
    
    <h1>{{ recepta.nom }}</h1>
    <p>{{ recepta.descripcio }}</p>
    
    <p><strong>Ingredients:</strong></p>
    <ul>
      <li v-for="(ingredient, index) in recepta.ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
    
    <p><strong>Pas a pas:</strong></p>
    <ol>
      <li v-for="(pas, index) in recepta.pasAPas" :key="index">
        {{ pas }}
      </li>
    </ol>


  <RouterLink :to="`/receptes`">Torna enrrere</RouterLink>
  </div>
</template>
