<template>
    <div>
        <div
            class="header flex items-center h-28 w-full justify-between bg-gray-800 text-white py-4 px-6 mb-8 sticky top-0 z-10 border mx-auto">
            <router-link :to="'/messages'" class="tooltip" title="Voltar para a página anterior">
                <button
                    class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Voltar
                </button>
            </router-link>
            <div>
                <h2 class="text-2xl font-bold mb-2">{{ chat.subject }}</h2>
                <p v-if="chat_participants.length > 0" class="text-gray-300"><span
                        class="font-bold">Participantes:</span> {{
                formattedParticipants }}</p>
            </div>
        </div>
        <div class="message-details flex flex-col max-w-4xl mx-auto px-4 py-8">
            <div class="overflow-y-auto mb-8">
                <div v-if="loading" class="text-gray-600">Carregando...</div>
                <div v-else-if="inbox_messages.length > 0">
                    <div v-for="(msg, index) in reversedMessages" :key="msg.id"
                        class="bg-white rounded-lg shadow-md p-4 mb-4">
                        <div class="flex items-center mb-2">
                            <span class="font-bold mr-2">{{ getParticipantName(msg.author_id) }}</span>
                            <span class="text-gray-600">{{ formatDate(msg.created_at) }}</span>
                        </div>
                        <div class="text-gray-800 mb-2">{{ msg.body }}</div>
                        <div v-show="msg.attachments.length > 0" class="attachments">
                            <span class="text-gray-600">Anexos:</span>
                            <a v-for="(attachment, index) in msg.attachments" :key="attachment.id"
                                :href="attachment.url" target="_blank" class="text-blue-500 hover:underline ml-2">{{
                attachment.display_name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex justify-center">
                    <div class="flex justify-between w-1/2">
                        <button @click="showAnswerField" title="Clique para responder" v-show="!isVisible"
                            class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            Responder Mensagem
                        </button>
                        <div v-if="chat.workflow_state == 'read'" @click="markAsUnread" v-show="!isVisible">
                            <button title="Clique para marcar como não lido"
                                class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                Marcar como não lido
                            </button>
                        </div>
                        <div v-else @click="markAsRead">
                            <button title="Clique para marcar como lido"
                                class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                </svg>
                                Marcar como lido
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="isVisible" class="response-field mt-4">
                    <div class="w-full max-w-lg mx-auto">
                        <textarea v-model="messageText"
                            class="w-full h-32 resize-none border border-gray-300 rounded-lg p-2"></textarea>
                    </div>
                    <div class="flex justify-center mt-4">
                        <div class="flex justify-between w-1/2">
                            <button @click="cancelResponse" title="Clique para cancelar a resposta"
                                class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                    viewBox="0 0 50 50" class="w-6 h-6 mr-1">
                                    <path
                                        d="M25 2C12.309534 2 2 12.309534 2 25C2 37.690466 12.309534 48 25 48C37.690466 48 48 37.690466 48 25C48 12.309534 37.690466 2 25 2zm0 2c11.609534 0 21 9.390466 21 21c0 11.609534-9.390466 21-21 21c-11.609534 0-21-9.390466-21-21c0-11.609534 9.390466-21 21-21zM32.990234 15.986328a1.0001 1.0001 0 0 1 0.707031 0.707031l-7.292969 7.292969l7.292969 7.292969a1.0001 1.0001 0 1 1-1.414062 1.414062L25 25.414062l-7.292969 7.292969a1.0001 1.0001 0 0 1-1.414062-1.414062l7.292969-7.292969l-7.292969-7.292969a1.0001 1.0001 0 0 1 1.414062-1.414062l7.292969 7.292969l7.292969-7.292969a1.0001 1.0001 0 0 1 0.707031-0.707031z"
                                        fill="white" />
                                </svg>
                                Cancelar
                            </button>
                            <button @click="submitResponse" title="Clique para enviar a resposta"
                                class="flex items-center bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Getter, Poster } from '../utils/APIHandler';

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
            messageText: ''
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
        cancelResponse() {
            this.isVisible = false
        },
        async submitResponse() {
            await Poster(`send_message/${this.id}/${this.messageText}`)
            this.messageText = '';
            this.isVisible = false;
            this.$router.push('/messages')
        },
        async markAsUnread() {
            await Getter(`set_message_unread/${this.id}/`)
            this.chat.workflow_state = 'unread'
            this.$router.push('/messages');
        },
        async markAsRead() {
            await Getter(`set_message_read/${this.id}/`)
            this.chat.workflow_state = 'read'
            this.$router.push('/messages');
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
