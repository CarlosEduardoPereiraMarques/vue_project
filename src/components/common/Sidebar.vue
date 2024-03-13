<template>
    <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSideBar">
        <div class="h-[50px] bg-gray-900 flex justify-start items-center">
            <div class="px-[20px]">
                <p class="font-bold text-xl">PUV Connect</p>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px] overflow-x-hidden overflow-y-auto">
            <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                <div class="flex flex-col justify-between space-y-[10px]">
                    <router-link to="/home"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Home
                    </router-link>
                    <router-link to="/dashboard"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="mr-2 w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        Dashboard
                    </router-link>
                    <router-link to="/messages"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Mensagens
                    </router-link>
                    <router-link to="/students"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Alunos
                    </router-link>
                    <router-link to="/announcement"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="mr-2 w-[25px] h-[25px]" fill="None" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Publicar Anúncio
                    </router-link>
                    <router-link to="/forum"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="mr-2 w-[25px] h-[25px] fill-current" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M4 3a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h1v2a1 1 0 0 0 1.7.7L9.4 13H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4Z"
                                clip-rule="evenodd" />
                            <path fill-rule="evenodd"
                                d="M8 17.2h.1l2.1-2.2H15a3 3 0 0 0 3-3V8h2c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-1v2a1 1 0 0 1-1.7.7L14.6 18H9a1 1 0 0 1-1-.8Z"
                                clip-rule="evenodd" />
                        </svg>

                        Fóruns
                    </router-link>
                    <router-link to="/tcc-area"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg style="color: white" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <polygon fill="var(--ci-primary-color, currentColor)" points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643" class="ci-primary"></polygon> <path fill="white" d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z" class="ci-primary"></path> </svg>
                        Área TCC
                    </router-link>
                    <router-link to="/view-allocations"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-[25px] h-[25px]" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Visualizar Alocações
                    </router-link>
                    <router-link to="/add-allocations"
                        class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-[25px] h-[25px]" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        Realizar Alocações
                    </router-link>
                    <router-link to="/remove-allocations"
                    class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                    <svg class="mr-2 w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                    Remover Alocações
                </router-link>
            </div>
            <div class="h-[35px]" @click="handleLogOut">
                <a
                    class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-[25px] h-[25px]" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                    </svg>
                    Log Out
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        showSideBar: Boolean,
    },
    methods: {
        handleLogOut() {
            this.$store.dispatch('getLogOut')
            this.$router.push('/')
        }
    }
}
</script>
