<template>
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">Caixa de entrada</h1>
        <div v-if="loading" class="text-gray-500">Carregando...</div>
        <div v-else-if="messages.length === 0" class="text-gray-500">Nenhuma mensagem pendente.</div>
        <div v-else>
            <ul>
                <li v-for="(message, index) in messages" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4"
                    @click="handleMessageClick(message.id)">
                    <div><img :src="message.avatar_url" alt="foto do avatar"></div>
                    <div class="font-bold">{{ message.participants[0].name }}</div>
                    <div class="text-gray-600">{{ message.subject }}</div>
                    <div class="text-sm text-gray-500">
                        {{ message.last_message.length > 100 ? message.last_message.substring(0, 100) + '...' :
                        message.last_message }}
                    </div>
                    <div>{{ message.message_count }}</div>
                    <div v-if="message.workflow_state === 'unread'" class="text-sm text-blue-500">Não lida</div>
                    <div v-if="message.workflow_state === 'read'" class="text-sm text-gray-500">Lida</div>
                    <div class="text-sm text-gray-500">{{ formatDate(message.last_message_at)  }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Getter } from '../utils/APIHandler'

export default {
    data() {
        return {
            loading: true,
            messages: []
        };
    },
    async created() {
        try {
            const response = await Getter('messages/');
            this.messages = response;
            console.log(response)
            this.loading = false;
        } catch (error) {
            console.error('Erro ao buscar as mensagens:', error);
        }
    },
    methods: {
        handleMessageClick(id) {
            this.$router.push({ name: 'Single Message', params: { id: id } });
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            const day = ('0' + date.getDate()).slice(-2);
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }
    }
}
</script>
