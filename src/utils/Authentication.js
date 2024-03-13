import { APIInstance } from "./axiosInstance"

export async function AuthHandler() {
    return {
        key: 'auth',
        name: 'Palstino',
        role: 'Assistente'
    }
}

export function handleLogout() {
    APIInstance.post()
}