<template>
    <div class="message-details">
        <a href="javascript:history.back()">Voltar</a>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="inbox_messages.length > 0">
            <h2>{{ chat.subject }} / {{ chat.participants[0].name }}</h2>
            <div v-for="(msg, index) in reversedMessages" :key="msg.id">
                <div class="message-content">{{ msg.body }} {{ formatDate(msg.created_at) }}</div>
                <div v-show="msg.attachments.length > 0" v-for="(attachment, index) in msg.attachments"
                    :key="attachment.id">
                    anexos:
                    <a :href="attachment.url" target="_blank">{{ attachment.display_name }}</a>
                </div>
            </div>
        </div>
        <div v-else>Nenhuma mensagem encontrada.</div>
        <div class="footer">
            <button @click="showAnswerField">Responder</button>
            <div v-if="isVisible">
                <textarea v-model="responseText"></textarea>
                <button @click="submitResponse">Enviar</button>
            </div>
            <div v-if="chat.workflow_state == 'read'" @click="markAsUnread">
                <button>Marcar como não lido</button>
            </div>
            <div v-else @click="markAsRead">
                <button>Marcar como lido</button>
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
        }
    },
    methods: {
        async fetchMessages() {
            try {
                const response = await Getter(`get_message/${this.id}/`);
                this.chat = response;
                this.inbox_messages = response.messages;
                this.chat_participants = response.participants
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
        }
    }
};
</script>
