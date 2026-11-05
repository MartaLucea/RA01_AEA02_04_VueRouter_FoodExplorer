<script setup>
import { ref } from 'vue';

const receptes = ref([
  {
    id: 1,
    nom: "Flam de Tonyina amb Mel i Cola-Cao",
    descripcio: "Una barreja gelatinosa i tèbia on el suc de la llauna de tonyina es fusiona amb el cacao, coronat amb un fil de mel rància.",
    imatge: "/flan.jpeg",
  },
  {
    id: 2,
    nom: "Gelatina d'Aigua de Salstixes amb Olives Negres i Nesquik",
    descripcio: "El líquid tèrbol de conservar les salsitxes de frankfurt portat a un altre nivell de repulsió gràcies a les làmines de gelatina.",
    imatge: "/gelatina.jpeg",
 },
  {
    id: 3,
    nom: "Pastís de Pa de Molde amb Natilles i Ceba Fregida",
    descripcio: "Capes de pa tou i moll que absorbeixen unes natilles industrials de vainilla, intercalades amb ceba cruixent de bossa.",
    imatge: "/pastis.jpeg",
  }
]);
</script>

<template>
  <div class="recipes-view">
    <h2 class="view-title">Llista de Receptes</h2>
    <div class="grid-container">
      <div v-for="recepta in receptes" :key="recepta.id" class="recipe-card">
        <div class="card-image-wrapper">
          <img :src="recepta.imatge" :alt="recepta.nom" class="card-image" />
        </div>
        <div class="card-content">
          <h3 class="recipe-name">{{ recepta.nom }}</h3>
          <p class="recipe-desc">{{ recepta.descripcio }}</p>
          <RouterLink :to="`/receptes/${recepta.id}`" class="recipe-link">
            Veure detalls
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://googleapis.com');

.recipes-view {
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.view-title {
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 32px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.recipe-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  aspect-ratio: 16 / 10;
  width: 100%;
  background: #334155;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.recipe-name {
  color: #f8fafc;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.recipe-desc {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 24px 0;
  flex-grow: 1;
}

.recipe-link {
  display: inline-block;
  background: #3b82f6;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 20px;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.recipe-link:hover {
  background: #2563eb;
}
</style>
