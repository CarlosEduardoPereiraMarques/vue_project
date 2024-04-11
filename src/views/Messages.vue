<template>
    <div class="container mx-auto p-[20px]">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold mb-6">Caixa de Entrada</h1>
        <a href="https://pucminas.instructure.com/conversations#filter=type=inbox" target="__blank" class="font-semibold mb-6 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">Adicionar nova Mensagem</a>
      </div>
      <div v-if="loading" class="text-gray-500">Carregando...</div>
      <div v-else-if="messages.length === 0" class="text-gray-500">Nenhuma mensagem pendente.</div>
      <div v-else>
        <ul>
          <li v-for="(message, index) in messages" :key="index" class="message-item mb-4">
            <div class="flex items-center justify-between py-4 px-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer" @click="handleMessageClick(message.id)">
              <div class="flex items-center">
                <img :src="message.avatar_url" alt="foto do avatar" class="w-12 h-12 rounded-full mr-4">
                <div>
                  <div class="font-semibold text-lg">{{ message.participants[0].name }}</div>
                  <div class="text-gray-600">{{ message.subject }}</div>
                  <div class="text-sm text-gray-500">{{ truncateMessage(message.last_message) }}</div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="text-sm text-gray-500 mb-2">{{ formatDate(message.last_message_at) }}</div>
                <div>{{ message.message_count }}</div>
                <div v-if="message.workflow_state === 'unread'" class="text-sm text-blue-500">Não lida</div>
                <div v-else class="text-sm text-gray-500">Lida</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  import { Getter } from "../utils/APIHandler";

  export default {
    data() {
      return {
        loading: true,
        messages: [],
      };
    },
    async created() {
      try {
        const response = await Getter("messages/");
        this.messages = response;
        this.loading = false;
      } catch (error) {
        console.error("Erro ao buscar as mensagens:", error);
      }
    },
    methods: {
      handleMessageClick(id) {
        this.$router.push({ name: "Single Message", params: { id: id } });
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" };
        return date.toLocaleDateString("pt-BR", options);
      },
      truncateMessage(message) {
        return message.length > 100 ? message.substring(0, 100) + '...' : message;
      },
    },
  };
  </script>

  <style scoped>
  .message-item {
    transition: background-color 0.3s ease-in-out;
  }

  .message-item:hover {
    background-color: #f3f4f6;
  }


  .message-item img {
    border: 2px solid #e2e8f0;
  }


  .message-item .text-blue-500 {
    font-weight: bold;
  }


  .message-item .text-gray-500 {
    font-style: italic;
  }
  </style>
