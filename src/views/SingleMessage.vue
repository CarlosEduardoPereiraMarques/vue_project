<template>
    <div class="message-details">
        <div v-if="loading">Carregando...</div>
        <div v-else-if="message">
            <h2>{{ message.subject }}</h2>
            <div class="message-content">{{ message.content }}</div>
        </div>
        <div v-else>Nenhuma mensagem encontrada.</div>
    </div>
</template>

<script>
import { Getter } from '../utils/APIHandler';

export default {
    props: ['id'],
    data() {
        return {
            message: null,
            loading: false
        };
    },
    mounted() {
        this.fetchMessage();
    },
    methods: {
        async fetchMessage() {
            try {
                this.loading = true;
                const response = await Getter(`get_message/${this.id}/`);
                this.message = response;
            } catch (error) {
                console.error('Erro ao buscar mensagem:', error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
