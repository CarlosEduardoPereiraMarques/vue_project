<script setup>
    import DefaultLayout from './components/common/DefaultLayout.vue';
</script>

<template>
    <DefaultLayout>
        <router-view/>
    </DefaultLayout>
</template>

<script>
// Fazer a verificação do autenticador, caso esteja autenticado, redirecionar para a URL /home
</script>

<style scoped>
</style>
