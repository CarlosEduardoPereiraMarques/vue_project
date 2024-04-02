import axios from 'axios'


export const APIInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
        'Content-Type': 'application/json'
    }
})


