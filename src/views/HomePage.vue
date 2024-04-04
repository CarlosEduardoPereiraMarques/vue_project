<template>
    <div class="bg-scroll h-screen home-background">
       <div class="px-8 py-12 bg-opacity-40 rounded-lg flex">
        <h1 class="text-2xl text-left">Olá {{ this.$store.state.userName }}, você logou com sucesso.</h1>
       </div>
    </div>
  </template>

  <script>
  export default {
    // Lógica do componente, se necessário
  }
  </script>

  <style scoped>
  /* Estilos específicos para este componente */
  .home-background {
        background-image: url('src/assets/shutterstock_1831732183.jpg');
        background-size: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        max-width: 100%;
        max-height: 100%;
        background-position: center;
        background-repeat: no-repeat;
  }
  </style>
