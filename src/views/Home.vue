<template>
  <main class="recipe-container">
    <div class="card">
      <h1 class="title">Benvingut a les pitjors receptes del món</h1>
      <p class="subtitle">Descobreix, explora i consulta les horripilants receptes d'aquesta pàgina</p>
      <RouterLink :to="`/receptes`" class="btn">Veure receptes</RouterLink>
    </div>
  </main>
</template>

<style scoped>
@import url('https://googleapis.com');

.recipe-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  padding: 24px;
  box-sizing: border-box;
}

.card {
  background: #1e293b;
  border-radius: 20px;
  padding: 40px;
  max-width: 460px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.icon-badge {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.title {
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 12px 0;
}

.subtitle {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 32px 0;
}

.btn {
  background: #3b82f6;
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #2563eb;
}

</style>
