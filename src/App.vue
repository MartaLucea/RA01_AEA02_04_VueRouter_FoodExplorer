<script setup></script>

<template>
  <div>
    <nav>
      <RouterLink to="/"> 🏠 Inici </RouterLink>
      <RouterLink to="/frameworks"> ⚙️ Frameworks </RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
  nav{
    background: #e0eafc;
    padding: 10px;
  }
</style>
