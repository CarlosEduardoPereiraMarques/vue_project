import axios from 'axios'


export const APIInstance = axios.create({
    baseURL: import.meta.env.VUE_APP_BASE_URL_API
})

export const LMSAxiosInstance = axios.create({
    baseURL: import.meta.env.VUE_APP_LMS_API
})

