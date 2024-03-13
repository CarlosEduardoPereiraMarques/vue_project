<script setup>
    import Sidebar from './Sidebar.vue'
    import Menu from './Menu.vue'
    import { ref } from 'vue';
</script>

<template>
    <div class="w-screen h-screen flex" v-if="showLayout">
        <Sidebar :showSideBar="showSideBar" />
        <div class="w-full h-full bg-gray-400">
            <Menu :showSideBar="showSideBar" @toggle-sidebar="toggleSideBar" />
            <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
                <div class="border border-gray-300 rounded-md p-[20px] h-full overflow-x-hidden overflow-y-auto">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <router-view/>
    </div>
</template>

<script>
const showSideBar = ref(true);

function toggleSideBar() {
    showSideBar.value = !showSideBar.value;
}

export default {
    computed: {
        showLayout: {
            get() {
                return this.$store.state.showLayout
            }
        }
    }
}
</script>

<style scoped>
</style>