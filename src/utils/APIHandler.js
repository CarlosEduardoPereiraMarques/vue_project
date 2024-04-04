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

export async function Poster(url, data) {
    try {
        refreshToken();
        const response = await APIInstance.post(url, data, {
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

export async function Putter(url, data) {
    try {
        refreshToken();
        const response = await APIInstance.put(url, data, {
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

export async function Deleter(url) {
    try {
        refreshToken();
        const response = await APIInstance.delete(url, {
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
