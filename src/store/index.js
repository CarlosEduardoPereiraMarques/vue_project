import { createStore } from "vuex";

export default createStore({
    state: {
        userAuth: false, // controla se o usuário está logado
        APIKey: null, // armazena a chave de autenticação com a api interna
        LMSKey: null, // armazena a chave de autenticação com a api do LMS
        refreshLMSKey: null,
        tokenExpiresAt: null, // armazena a data de expiração do token
        showLayout: false, // Exibe e oculta o layout do usuário
        userName: null, // armazena o nome do usuário, vindo do LMS
        userRole: 'Assistente Acadêmico', // Assistente, Administrador e Administrador de Assistentes
        userPhoto: null // armazena a url da foto do usuário, vindo do LMS
    },
    getters: {
        isAuthenticated(state) {
            return state.userAuth; // Retorna true se o usuário estiver autenticado, caso contrário, false
        }
    },
    mutations: {
        setUserAuth(state, payload) {
            state.userAuth = true
            state.APIKey = payload.api_token
            state.refreshLMSKey = payload.refresh_token
            state.LMSKey = payload.lms_token
            state.tokenExpiresAt = new Date(payload.expires_at).toISOString()
        },
        deleteUserAuth(state) {
            state.userAuth = false
            state.APIKey = null
            state.showLayout = false
            state.userName = null
            state.userRole = null
            state.userPhoto = null
        },
        setUserLMSData(state, payload) {
            state.showLayout = true
            state.userName = payload.name
            //state.userRole = payload.role
            state.userPhoto = payload.avatar_url
        },
        setRefreshToken(state, payload) {
            state.LMSKey = payload.access_token
            state.tokenExpiresAt = new Date(payload.expires_at).toISOString()
        }
    },
    actions: {
        setUserLMSData({ commit }, payload) {
            commit('setUserLMSData', payload)
        },
        async getLogin({ commit }, payload) {
            commit('setUserAuth', payload)
        },
        getLogOut({ commit }) {
            commit('deleteUserAuth')
        },
        setRefreshToken({ commit }, payload) {
            commit('setRefreshToken', payload)
        }
    }
})