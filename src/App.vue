<script setup></script>

<template>
  <div class="app-layout">
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Inici</RouterLink>
      <RouterLink to="/receptes" class="nav-link">Receptes</RouterLink>
    </nav>

    <main class="main-content">
      <RouterView :key="$route.fullPath" />
    </main>
  </div>
</template>

<style scoped>
@import url('https://googleapis.com');

.app-layout {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #0f172a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  gap: 24px;
  padding: 20px 40px;
  background: #1e293b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #f8fafc;
}

.router-link-active {
  color: #3b82f6;
}

.router-link-active:hover {
  color: #3b82f6;
}

.main-content {
  flex: 1;
}
</style>
