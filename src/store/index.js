import { createStore } from "vuex";
import { AuthHandler } from "../utils/Authentication";

export default createStore({
    state: {
        userAuth: false,
        userKey: null,
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
            state.userKey = payload.key
            state.showLayout = true
            state.userName = payload.name
            state.userRole = payload.role
            state.userPhoto = payload.photoUrl
        },
        deleteUserAuth(state) {
            state.userAuth = false
            state.userKey = null
            state.showLayout = false
            state.userName = null
            state.userRole = null
            state.userPhoto = null
        }
    },
    actions: {
        async getLogin({ commit }) {
            const auth = await AuthHandler()
            commit('setUserAuth', auth)
        },
        getLogOut({ commit }) {
            commit('deleteUserAuth')
        }
    }
})