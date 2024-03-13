<script setup>
  import { useRoute } from 'vue-router';
  import DefaultLayout from './components/common/DefaultLayout.vue';

  const route = useRoute();
  const useLayout = route.meta.hasOwnProperty('useLayout') ? route.meta.useLayout : true;

  console.log('Valor de useLayout:', useLayout);
</script>

<template>
  <template v-if="useLayout">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </template>
  <template v-else>
    <router-view />
  </template>
</template>

<script>

</script>

<style scoped>

</style>
