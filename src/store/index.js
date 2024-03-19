import { createStore } from "vuex";

export default createStore({
    state: {
        userAuth: false,
        APIKey: null,
        LMSKey: null,
        showLayout: false,
        userName: null,
        userRole: null,
        userPhoto: null
    },
    getters: {

    },
    mutations: {
        setUserAuth(state, payload) {
            state.userAuth = true
            state.APIKey = payload.api_token
            state.LMSKey = payload.lms_token
            state.showLayout = true

        },
        deleteUserAuth(state) {
            state.userAuth = false
            state.APIKey = null
            state.showLayout = false
            state.userName = null
            state.userRole = null
            state.userPhoto = null
        }
    },
    actions: {
        async getLogin({ commit }, payload) {
            commit('setUserAuth', payload)
        },
        getLogOut({ commit }) {
            commit('deleteUserAuth')
        }
    }
})