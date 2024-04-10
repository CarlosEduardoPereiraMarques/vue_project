<template>
   <div>
    <div class="header flex items-center h-28 w-5/6 justify-between bg-gray-800 text-white py-4 px-6 mb-8 sticky top-0 z-10 border mx-auto">
      <a href="javascript:history.back()" class="text-blue-500">
        <button class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Voltar
        </button>
      </a>
      <div>
        <h2 class="text-2xl font-bold mb-2">{{ chat.subject }}</h2>
        <p v-if="chat_participants.length > 0" class="text-gray-300"><span class="font-bold">Participantes:</span> {{ formattedParticipants }}</p>
      </div>
    </div>
    <div class="message-details flex flex-col max-w-4xl mx-auto px-4 py-8">

        <div class="overflow-y-auto mb-8">
          <div v-if="loading" class="text-gray-600">Carregando...</div>
          <div v-else-if="inbox_messages.length > 0">
            <div v-for="(msg, index) in reversedMessages" :key="msg.id" class="bg-white rounded-lg shadow-md p-4 mb-4">
              <div class="flex items-center mb-2">
                <span class="font-bold mr-2">{{ getParticipantName(msg.author_id) }}</span>
              </div>
              <div class="text-gray-800 mb-2">{{ msg.body }}</div>
              <div v-show="msg.attachments.length > 0" class="attachments">
                <span class="text-gray-600">Anexos:</span>
                <a v-for="(attachment, index) in msg.attachments" :key="attachment.id" :href="attachment.url" target="_blank" class="text-blue-500 hover:underline ml-2">{{ attachment.display_name }}</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button @click="showAnswerField" class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            Responder
          </button>
          <div v-if="isVisible" class="response-field mt-4">
            <Editor v-model="responseText" editorStyle="height: 240px" class="w-full border rounded-md px-3 py-2 mt-2"/>
            <button @click="submitResponse" class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              Enviar
            </button>
          </div>
          <div v-if="chat.workflow_state == 'read'" @click="markAsUnread" class="read-button mt-4">
            <button class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Marcar como não lido
            </button>
          </div>
          <div v-else @click="markAsRead" class="unread-button mt-4">
            <button class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
              Marcar como lido
            </button>
          </div>
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
  .header {
    background-color: #2d3748;
  }

  .header button {
    transition: background-color 0.3s ease;
  }

  .header button:hover {
    background-color: #4a5568;
  }

  .message-details .bg-white {
    background-color: #ffffff;
  }

  .message-details .bg-white:hover {
    background-color: #f7fafc;
  }

  .message-details button {
    transition: background-color 0.3s ease;
  }

  .message-details button:hover {
    background-color: #4a5568;
  }
  </style>
