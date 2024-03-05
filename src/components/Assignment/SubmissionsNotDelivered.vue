<template>
    <div class="tabela">
      <div class="table-header"></div>
      <div class="table-row" v-for="(submissao, index) in submissoesNaoEntregues" :key="index">
        <div class="cell">{{ submissao.nome }}</div>
        <div class="cell">{{ submissao.data }}</div>
        <!-- Adicione mais células conforme necessário -->
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'SubmissionsNotDelivered',
    data() {
      return {
        submissoesNaoEntregues: [
          { nome: 'Submissão não entregue 1', data: '01/02/2024' },
          { nome: 'Submissão não entregue 2', data: '02/02/2024' },
          // Adicione mais submissões conforme necessário
        ]
      };
    }
  };
  </script>