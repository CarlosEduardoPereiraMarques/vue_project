<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">Caixa de entrada</h1>
      <div v-if="emails.length === 0" class="text-gray-500">Nenhum email encontrado.</div>
      <div v-else>
        <div v-for="(email, index) in emails" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4">
          <div class="font-bold">{{ email.sender }}</div>
          <div class="text-gray-600">{{ email.subject }}</div>
          <div class="text-sm text-gray-500">{{ email.body }}</div>
          <div class="text-sm text-gray-500">{{ email.entrega }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        emails: [
          { sender: 'joao@example.com', subject: 'Sobre o projeto', body: 'Olá, poderia me enviar mais informações sobre o projeto?', entrega: '4 de Fev de 2022 em 11:44' },
          { sender: 'maria@example.com', subject: 'Reunião na segunda-feira', body: 'Lembrete: Temos uma reunião marcada para segunda-feira às 10h.', entrega: '4 de Fev de 2022 em 11:44' },
          { sender: 'carlos@example.com', subject: 'Novo pedido recebido', body: 'Você tem um novo pedido esperando para ser processado.', entrega: '4 de Fev de 2022 em 11:44' },
          { sender: 'joao@example.com', subject: 'Sobre o projeto', body: 'Olá, poderia me enviar mais informações sobre o projeto?', entrega: '4 de Fev de 2022 em 11:44' },
          { sender: 'maria@example.com', subject: 'Reunião na segunda-feira', body: 'Lembrete: Temos uma reunião marcada para segunda-feira às 10h.', entrega: '4 de Fev de 2022 em 11:44' },
          { sender: 'carlos@example.com', subject: 'Novo pedido recebido', body: 'Você tem um novo pedido esperando para ser processado.', entrega: '4 de Fev de 2022 em 11:44' }

        ]
      };
    }
  };
  </script>