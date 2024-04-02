import { APIInstance } from "./axiosInstance";
import store from "../store/index";

function refreshToken() {
    const now = new Date()
    const tokenExpiresAt = new Date(store.state.tokenExpiresAt)

    if (now >= tokenExpiresAt) {
        store.dispatch('setRefreshToken')
    }
}

export async function Getter(url) {
    try {
        refreshToken()
        const response = await APIInstance.get(url, {
            headers: {
                Authorization: `Token ${store.state.APIKey}`,
                'access-token': store.state.LMSKey,
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}
