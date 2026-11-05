<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const receptaId = Number(route.params.id)

const receptes = ref([
  {
    id: 1,
    nom: "Flam de Tonyina amb Mel i Cola-Cao",
    descripcio: "Una barreja gelatinosa i tèbia on el suc de la llauna de tonyina es fusiona amb el cacao, coronat amb un fil de mel rància.",
    imatge: "/flan.jpeg",
    ingredients: [ "3 llaunes de tonyina en oli desfet", "4 ous sencers (amb un tros de closca de regal)", "Mig pot de mel líquida", "3 cullerades de Cola-Cao en pols" ],
    pasAPas: [ "Triturar la tonyina amb el seu oli i el Cola-Cao fins a crear una pasta fosc i lluent", "Batre els ous i barrejar-ho tot en un motlle de silicona", "Enfornar al bany maria durant 40 minuts fins que quedi una textura tremolenca", "Desmotllar en calent i cobrir amb la mel perquè sembli caramel" ]
  },
  {
    id: 2,
    nom: "Gelatina d'Aigua de Salstixes amb Olives Negres i Nesquik",
    descripcio: "El líquid tèrbol de conservar les salsitxes de frankfurt portat a un altre nivell de repulsió gràcies a les làmines de gelatina.",
    imatge: "/gelatina.jpeg",
    ingredients: [ "El caldo de 2 llaunes de salsitxes", "6 làmines de gelatina neutra", "Un grapat d'olives negres picades", "2 cullerades de Nesquik" ],
    pasAPas: [ "Escalfar l'aigua de les salsitxes fins que surtin bombolles i fer-hi dissoldre el Nesquik", "Afegir les làmines de gelatina prèviament hidratades i remenar amb energia", "Llançar els trossos d'oliva negra al fons del motlle perquè semblin insectes", "Deixar refredar a la nevera fins que quedi un bloc sòlid, compacte i pudent" ]
  },
  {
    id: 3,
    nom: "Pastís de Pa de Molde amb Natilles i Ceba Fregida",
    descripcio: "Capes de pa tou i moll que absorbeixen unes natilles industrials de vainilla, intercalades amb ceba cruixent de bossa.",
    imatge: "/pastis.jpeg",
    ingredients: [ "Un paquet de pa de molde sense crosta", "Un pack de 4 natilles de supermercat", "Un pot de ceba fregida cruixent", "Un raig de vinagre de Mòdena" ],
    pasAPas: [ "Col·locar una capa de pa de molde a la base d'un plat", "Untar un pot de natilles sencer fins que el pa quedi completament xop i desfet", "Llançar un grapat generós de ceba fregida per sobre per donar el toc de contrast", "Repetir el procés fins a fer 4 pisos i rematar amb el fil de vinagre negre" ]
  }
]);

const recepta = receptes.value.find(r => r.id === receptaId)

if (!recepta) {
  router.replace({ name: 'notfound' })
}
</script>

<template>
  <div v-if="recepta" class="recipe-detail-view">
    <div class="recipe-container-detail">
      <div class="image-section">
        <img :src="recepta.imatge" :alt="recepta.nom" class="recipe-img">
      </div>
      
      <div class="content-section">
        <h1 class="recipe-title">{{ recepta.nom }}</h1>
        <p class="recipe-description">{{ recepta.descripcio }}</p>
        
        <div class="info-block">
          <p class="section-subtitle">Ingredients</p>
          <ul class="ingredients-list">
            <li v-for="(ingredient, index) in recepta.ingredients" :key="index" class="ingredient-item">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        
        <div class="info-block">
          <p class="section-subtitle">Pas a pas</p>
          <ol class="steps-list">
            <li v-for="(pas, index) in recepta.pasAPas" :key="index" class="step-item">
              {{ pas }}
            </li>
          </ol>
        </div>

        <div class="actions">
          <RouterLink :to="`/receptes`" class="back-link">Torna enrere</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://googleapis.com');

.recipe-detail-view {
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.recipe-container-detail {
  background: #1e293b;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.image-section {
  width: 100%;
  height: 350px;
  background: #334155;
}

.recipe-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-section {
  padding: 40px;
}

.recipe-title {
  color: #f8fafc;
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.recipe-description {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.info-block {
  margin-bottom: 32px;
}

.section-subtitle {
  color: #f8fafc;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.ingredient-item {
  color: #cbd5e1;
  background: #273549;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
}

.steps-list {
  padding-left: 20px;
  margin: 0;
}

.step-item {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.step-item::marker {
  color: #3b82f6;
  font-weight: 700;
}

.actions {
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 24px;
}

.back-link {
  display: inline-block;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #f8fafc;
}
</style>
