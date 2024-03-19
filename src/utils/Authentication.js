import { APIInstance } from "./axiosInstance"

export function handleLogout() {
    APIInstance.post()
}

export function handleLogin() {
    return new Promise((resolve, reject) => {
        APIInstance.get('login/')
            .then(response => {
                window.location.href = response.data.login_url
            })
            .catch(error => {
                console.error('Erro ao realizar login:', error);
                reject(error);
            });
    });
}