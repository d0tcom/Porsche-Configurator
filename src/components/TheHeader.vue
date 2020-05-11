<template>
    <header>
      <router-link :to="{ name: 'Configurateur' }">
        <div class="logo">
        <a href="#"><img src="../assets/logo-porsche.svg" alt="Logo Porsche"></a>
        </div>
      </router-link>
    </header>
</template>

<style lang="scss">
header {
  .logo {
    display: flex;
    justify-content: center;
    padding: 25px 0;
    border-bottom: 1px solid #DFDFDF;
  }
}
</style>