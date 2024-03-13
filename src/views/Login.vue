<template>
  <div class="bg-center bg-cover bg-no-repeat flex items-center justify-center h-screen" style="background-image: url('src/views/assets/index_background.jpg')">
    <div class="w-11/12 md:w-96 h-99 bg-gray-300 bg-opacity-50 rounded-lg flex items-center justify-center">
  <div class="text-black text-center">
    <div class="flex items-center justify-center">
      <img src="./assets/index_smc-pucvirtual.png" alt="Logo PUC Minas Virtual">
    </div>
    <h1>
      <h2 class="text-xl"><br><b>Bem-vindo ao PUV Connect</b> <br></h2>
      <br><br> <br>
      O acesso ao PUV Connect será realizado utilizando sua <b>credencial administrativa (codigo@pucminas.br).</b>
    </h1>
    <a href="#" class="mt-4 inline-block">
      <button class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300" @click="login">Acessar com crencial Administrativa</button>
    </a> <br> <br>
    <h1 class="text-slate-500">Pontifícia Universidade Católica de Minas Gerais</h1>

  </div>
</div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Função para redirecionar para a página inicial (home)
    const redirectToHome = () => {
      router.push({ name: 'Home' }); // Redireciona para a rota com o nome 'HomePage'
    };

    // Função que será chamada quando o botão de login for clicado
    const login = () => {
      // Lógica de autenticação aqui (se necessário)

      // Redireciona para a página inicial (home)
      redirectToHome();
    };

    return {
      login
    };
  }
};
</script>

<style>

</style>
