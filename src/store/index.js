import { createStore } from "vuex";

export default createStore({
    state: {
        userAuth: false, // controla se o usuário está logado
        APIKey: null, // armazena a chave de autenticação com a api interna
        LMSKey: null, // armazena a chave de autenticação com a api do LMS
        tokenExpiresAt: null, // armazena a data de expiração do token
        showLayout: false, // Exibe e oculta o layout do usuário
        userName: null, // armazena o nome do usuário, vindo do LMS
        userRole: null, // Assistente, Administrador e Administrador de Assistentes
        userPhoto: null // armazena a url da foto do usuário, vindo do LMS
    },
    getters: {

    },
    mutations: {
        setUserAuth(state, payload) {
            state.userAuth = true
            state.APIKey = payload.api_token
            state.LMSKey = payload.lms_token
            state.showLayout = true
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
            state.userName = payload.data.name
            state.userRole = payload.data.role
            state.userPhoto = payload.data.avatar_url
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