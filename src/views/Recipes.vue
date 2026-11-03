<script setup>
import { ref } from 'vue';

export const receptes = ref([
  {
    id: 1,
    nom: "Pasta Carbonara",
    descripcio: "Un dels clàssics italians més cremosos.",
    imatge: "https://example.com/images/carbonara.jpg",
    ingredients: [
      "Pasta",
      "Ou",
      "Formatge Pecorino",
      "Pancetta"
    ],
    pasAPas: [
      "Sofregir",
      "Bullir",
      "Barrejar",
      "Emplatar"
    ]
  },
  {
    id: 2,
    nom: "Paella de Marisc",
    descripcio: "Plat tradicional amb tot el gust del mar.",
    imatge: "https://example.com/images/paella.jpg",
    ingredients: [
      "Arròs",
      "Gambes",
      "Calamars",
      "Caldo de peix",
      "Safrà"
    ],
    pasAPas: [
      "Sofregir el marisc i les verdures",
      "Afegir l'arròs i torrar-lo lleugerament",
      "Abocar el caldo i coure a foc mitjà",
      "Deixar reposar i servir"
    ]
  },
  {
    id: 3,
    nom: "Amanida Caprese",
    descripcio: "Una opció fresca i lleugera típica de la Itàlia mediterrània.",
    imatge: "https://example.com/images/caprese.jpg",
    ingredients: [
      "Tomàquets frescos",
      "Formatge Mozzarella",
      "Fulles de alfàbrega",
      "Oli d'oliva verge extra",
      "Sal i pebre"
    ],
    pasAPas: [
      "Tallar els tomàquets i la mozzarella a rodanxes",
      "Alternar les rodanxes en un plat",
      "Afegir les fulles d'alfàbrega fresca",
      "Amanir amb oli d'oliva, sal i pebre"
    ]
  }
]);

</script>
<template>
    <div>
        <h2>Llista de Receptes</h2>
        <ul>
            <li v-for="recepta in receptes" :key="recepta.nom">
              <RouterLink :to="`/receptes/${recepta.nom}`">{{ recepta.nom }}</RouterLink>
            </li>
        </ul>
        <RouterView :key="$route.fullPath"/>
    </div>
</template>