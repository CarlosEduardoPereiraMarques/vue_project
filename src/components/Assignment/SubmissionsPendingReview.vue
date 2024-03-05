<template>
    <div class="tabela">
      <div class="table-header"></div>
      <div class="table-row" v-for="(submissao, index) in submissoesPendentesRevisao" :key="index">
        <div class="cell">{{ submissao.nome }}</div>
        <div class="cell">{{ submissao.data }}</div>
        <!-- Adicione mais células conforme necessário -->
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'SubmissionsPendingReview',
    data() {
      return {
        submissoesPendentesRevisao: [
          { nome: 'Submissão pendente 1', data: '01/02/2024' },
          { nome: 'Submissão pendente 2', data: '02/02/2024' },
          { nome: 'Submissão pendente 1', data: '01/02/2024' },
          { nome: 'Submissão pendente 2', data: '02/02/2024' },
          { nome: 'Submissão pendente 1', data: '01/02/2024' },
          { nome: 'Submissão pendente 2', data: '02/02/2024' },
          // Adicione mais submissões conforme necessário
        ]
      };
    }
  };
  </script>