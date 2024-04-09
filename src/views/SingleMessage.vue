<template>
    <div class="sticky-top flex items-center justify-between mb-8 border">
        <a href="javascript:history.back()" class="text-blue-500 hover:underline">⬅️ Voltar</a>
        <div>
          <h2 class="text-2xl font-bold mb-2">{{ chat.subject }}</h2>
          <p v-if="chat_participants.length > 0"><span class="font-bold">Participantes:</span> {{ formattedParticipants }}</p>
        </div>
      </div>
    <div class="message-details flex flex-col max-w-4xl mx-auto px-4 py-8">

      <div class="flex-1 overflow-y-auto mb-8">
        <div v-if="loading" class="text-gray-600">Carregando...</div>
        <div v-else-if="inbox_messages.length > 0">
          <div v-for="(msg, index) in reversedMessages" :key="msg.id" class="border rounded p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="font-bold mr-2">{{ getParticipantName(msg.author_id) }}</span>
            </div>
            <div class="message-content text-gray-800 mb-2">{{ msg.body }}</div>
            <div v-show="msg.attachments.length > 0" class="attachments">
              <span class="text-gray-600">Anexos:</span>
              <a v-for="(attachment, index) in msg.attachments" :key="attachment.id" :href="attachment.url" target="_blank" class="text-blue-500 hover:underline ml-2">{{ attachment.display_name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button @click="showAnswerField" class="py-2 px-4 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-400 transition duration-300">Responder</button>
        <div v-if="isVisible" class="response-field mt-4">
          <textarea v-model="responseText" class="w-full border rounded-md px-3 py-2 mt-2"></textarea>
          <button @click="submitResponse" class="py-2 px-4 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-400 transition duration-300">Enviar</button>
        </div>
        <div v-if="chat.workflow_state == 'read'" @click="markAsUnread" class="read-button mt-4">
          <button class="py-2 px-4 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-400 transition duration-300">Marcar como não lido</button>
        </div>
        <div v-else @click="markAsRead" class="unread-button mt-4">
          <button class="py-2 px-4 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-400 transition duration-300">Marcar como lido</button>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { Getter } from '../utils/APIHandler';

  export default {
    props: ['id'],
    data() {
      return {
        loading: true,
        chat: {},
        inbox_messages: [],
        chat_participants: [],
        participantsMap: {},
        isVisible: false,
        responseText: ''
      };
    },
    mounted() {
      this.fetchMessages();
    },
    computed: {
      reversedMessages() {
        return this.inbox_messages.slice().reverse();
      },
      formattedParticipants() {
        return this.chat_participants.map(participant => participant.name).join(', ');
      }
    },
    methods: {
      async fetchMessages() {
        try {
          const response = await Getter(`get_message/${this.id}/`);
          this.chat = response;
          this.inbox_messages = response.messages;
          this.chat_participants = response.participants;
          this.buildParticipantsMap();
        } catch (error) {
          console.error('Erro ao buscar mensagem:', error);
        } finally {
          this.loading = false;
        }
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${day}/${month}/${year} ${hours}:${minutes}`;
      },
      showAnswerField() {
        this.isVisible = true;
      },
      submitResponse() {
        console.log('Resposta enviada:', this.responseText);
        this.responseText = '';
        this.isVisible = false;
      },
      markAsUnread() {
        this.chat.workflow_state = 'unread';
      },
      markAsRead() {
        this.chat.workflow_state = 'read';
      },
      buildParticipantsMap() {
        this.chat_participants.forEach(participant => {
          this.participantsMap[participant.id] = participant.name;
        });
      },
      getParticipantName(authorId) {
        return this.participantsMap[authorId]
      }
    }
  };
  </script>

  <style scoped>
  .sticky-top {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    padding: 0 16px;
  }
  </style>
