<template>
    <div class="bg-center bg-cover bg-no-repeat flex items-center justify-center h-screen login-background">
        <div class="text-black text-center flex-col w-11/12 md:w-96 h-99 bg-gray-300 bg-opacity-50 rounded-lg p-8 ">
            <img src="../assets/index_smc-pucvirtual.png" alt="Logo PUC Minas Virtual" class="mx-auto">
            <h1 class="text-xl font-bold">Bem-vindo ao PUV Connect!</h1>
            <p>Clique no botão abaixo para acessar a plataforma:</p>
            <a @click="handleLogin" class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-4 rounded-md hover:bg-gray-400 transition duration-300 cursor-pointer">
                Acessar com Canvas
            </a>
        </div>
    </div>
</template>

<script>
import { handleLogin } from '../utils/Authentication';

export default {
    methods: {
        async handleLogin() {
            try {
                await handleLogin();
                this.$router.push('/home');
            } catch (error) {
                console.error('Erro ao realizar login:', error);
                // Fazer tratamento de erro
            }
        }
    },
};
</script>

<style>
.login-background {
    background-image: url('src/assets/index_background.jpg')
}
</style>
